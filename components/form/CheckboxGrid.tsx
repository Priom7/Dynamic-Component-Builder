import React from 'react';

interface CheckboxGridProps {
  name: string;
  label: string;
  grid: boolean[][];
  onChange: (rowIndex: number, colIndex: number) => void;
  toggleAllByRow: (rowIndex: number, selectAll: boolean) => void;
  toggleAllByColumn: (colIndex: number, selectAll: boolean) => void;
}

const CheckboxGrid: React.FC<CheckboxGridProps> = ({ name, label, grid, onChange, toggleAllByRow, toggleAllByColumn }) => {
  if (!grid) {
    return null; // or return a loading state or an error message
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => toggleAllByRow(rowIndex, true)}
          >
            Select All Row {rowIndex + 1}
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => toggleAllByRow(rowIndex, false)}
          >
            Unselect All Row {rowIndex + 1}
          </button>
          {row.map((checked, colIndex) => (
            <input
              key={`row-${rowIndex}-col-${colIndex}`}
              type="checkbox"
              checked={checked}
              onChange={() => onChange(rowIndex, colIndex)}
              className="form-check-input mr-2"
            />
          ))}
        </div>
      ))}
      <div className="mt-2">
        {grid[0].map((_, colIndex) => (
          <button
            key={`col-${colIndex}`}
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => toggleAllByColumn(colIndex, true)}
          >
            Select All Column {colIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGrid;