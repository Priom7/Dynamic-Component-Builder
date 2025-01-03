import React from 'react';

interface SelectInputProps {
  name: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  multiple?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, label, value, options, onChange, error, multiple }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        multiple={multiple}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectInput;