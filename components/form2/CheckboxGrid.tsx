import React from "react";

interface CheckboxGridProps {
  name: string;
  label: string;
  grid: boolean[][];
  onChange: (rowIndex: number, colIndex: number) => void;
  selectAllByRow: (rowIndex: number) => void;
  selectAllByColumn: (colIndex: number) => void;
  error?: string;
}

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  name,
  label,
  grid = [], // Default to an empty array
  onChange,
  selectAllByRow,
  selectAllByColumn,
  error,
}) => {
  // Ensure grid is always an array of arrays
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) {
    return <div className="text-danger">Invalid grid data</div>;
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="d-flex align-items-center mb-2">
          <button
            type="button"
            className="btn btn-secondary btn-sm mr-2"
            onClick={() => selectAllByRow(rowIndex)}
          >
            Select All Row {rowIndex + 1}
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
            className="btn btn-secondary btn-sm mr-2"
            onClick={() => selectAllByColumn(colIndex)}
          >
            Select All Column {colIndex + 1}
          </button>
        ))}
      </div>
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default CheckboxGrid;
