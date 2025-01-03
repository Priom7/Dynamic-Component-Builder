import React from 'react';

interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Array<{ label: string; value: string }>;
  values: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ name, label, options, values, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    onChange(selectedOptions);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        multiple
        value={values}
        onChange={handleChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default MultiSelectDropdown;