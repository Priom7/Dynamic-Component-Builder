import React, { useState, useEffect } from "react";

interface Column {
  field: string;
  header: string;
}

interface DataItem {
  [key: string]: any; // Data can vary, so use an index signature
}

interface Filter {
  field: string;
  value: string;
}

interface DynamicTableProps {
  columns: Column[];
  data: DataItem[];
  filters: Filter[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data, filters }) => {
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filtering logic
  useEffect(() => {
    let result = data;

    // Apply filters
    filters.forEach((filter) => {
      result = result.filter((row) =>
        row[filter.field].toString().toLowerCase().includes(filter.value.toLowerCase())
      );
    });

    // Apply search query
    if (searchQuery) {
      result = result.filter((row) =>
        columns.some((column) =>
          row[column.field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilteredData(result);
  }, [data, filters, searchQuery]);

  // Pagination logic
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleRowsChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setRowsPerPage(parseInt(e.target.value, 10));

  const displayedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <span>Rows per page: </span>
        <select value={rowsPerPage} onChange={handleRowsChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>

        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= Math.ceil(filteredData.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;
