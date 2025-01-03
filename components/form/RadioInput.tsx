import React from 'react';

interface RadioInputProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ name, label, options, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value} className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
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

export default RadioInput;