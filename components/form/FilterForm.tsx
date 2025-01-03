import React, { useState } from 'react';

// Define interfaces for props
interface Column {
  field: string;
  header: string;
}

interface Filter {
  field: string;
  value: string;
}

interface FilterFormProps {
  columns: Column[];
  onFilterChange: (filters: Filter[]) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ columns, onFilterChange }) => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const addFilter = () => {
    setFilters([...filters, { field: '', value: '' }]);
  };

  const updateFilter = (index: number, field: keyof Filter, value: string) => {
    const newFilters = [...filters];
    newFilters[index][field] = value;
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const removeFilter = (index: number) => {
    const newFilters = filters.filter((_, i) => i !== index);
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div>
      {filters.map((filter, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <select
            value={filter.field}
            onChange={(e) => updateFilter(index, 'field', e.target.value)}
          >
            <option value="">Select Column</option>
            {columns.map((column) => (
              <option key={column.field} value={column.field}>
                {column.header}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={filter.value}
            onChange={(e) => updateFilter(index, 'value', e.target.value)}
            placeholder="Enter filter value"
          />

          <button onClick={() => removeFilter(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addFilter}>Add Filter</button>
    </div>
  );
};

export default FilterForm;
