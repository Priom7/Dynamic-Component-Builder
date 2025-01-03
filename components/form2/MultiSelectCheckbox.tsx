import React from 'react';

interface MultiSelectCheckboxProps {
  name: string;
  label: string;
  options: Array<{ label: string; value: string }>;
  values: string[];
  onChange: (value: string) => void;
  error?: string;
}

const MultiSelectCheckbox: React.FC<MultiSelectCheckboxProps> = ({
  name,
  label,
  options,
  values,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value} className="form-check">
          <input
            type="checkbox"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={values.includes(option.value)}
            onChange={() => onChange(option.value)}
            className="form-check-input"
          />
          <label htmlFor={`${name}-${option.value}`} className="form-check-label">
            {option.label}
          </label>
        </div>
      ))}
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default MultiSelectCheckbox;