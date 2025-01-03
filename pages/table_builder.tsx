import React, { useState } from "react";

const TableConfigForm = () => {
  const [columns, setColumns] = useState([{ field: "", header: "" }]);
  const [generatedTable, setGeneratedTable] = useState<string>("");

  const handleAddColumn = () => {
    setColumns([...columns, { field: "", header: "" }]);
  };

  const handleColumnChange = (
    index: number,
    key: "field" | "header",
    value: string
  ) => {
    const newColumns = [...columns];
    newColumns[index][key] = value;
    setColumns(newColumns);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/generate-table", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ columns }),
    });

    const data = await response.json();
    if (response.ok) {
      setGeneratedTable(data.message);
    } else {
      alert("Error generating table");
    }
  };

  return (
    <div className="container">
      <h1>Create a Dynamic Table</h1>
      <form onSubmit={handleSubmit}>
        {columns.map((column, index) => (
          <div key={index} className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Field"
                value={column.field}
                onChange={(e) =>
                  handleColumnChange(index, "field", e.target.value)
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Header"
                value={column.header}
                onChange={(e) =>
                  handleColumnChange(index, "header", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <div>
          <button
            type="button"
            className="btn btn-primary p-1 m-1"
            onClick={handleAddColumn}
          >
            Add Column
          </button>

          <button type="submit" className="btn btn-success p-1 m-1">
            Generate Table
          </button>
          <a href="/generated-table" className="btn btn-primary p-1 m-1">
          View Generated Forms{" "}
        </a>
        </div>
      </form>

      {generatedTable && <p>{generatedTable}</p>}
    </div>
  );
};

export default TableConfigForm;
