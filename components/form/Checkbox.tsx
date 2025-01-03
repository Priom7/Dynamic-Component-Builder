import React from 'react';

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange, error }) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name} className="form-check-label">
          {label}
        </label>
        {error && <div className="invalid-feedback d-block">{error}</div>}
      </div>
    </div>
  );
};

export default Checkbox;