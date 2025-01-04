import React, { useReducer } from "react";
import "./DynamicForm10.css"; // Import the CSS file

// Define the state structure
interface FormState {
  [key: string]: any;
  errors: {
    [key: string]: string;
  };
}

interface FormField {
  name: string;
  label: string;
  type: string;
  validationRules?: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
  options?: Array<{ label: string; value: string }>;
  multiSelectOptions?: Array<{ label: string; value: string }>; // For multi-select
  checkboxGrid?: Array<Array<boolean>>; // For 2D Checkbox grid
}

interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: FormState) => void;
  customStyles?: { [key: string]: React.CSSProperties };
  initialFormState?: FormState;
}

// Reducer function to manage form state
const formReducer = (state: FormState, action: any): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "RESET_FORM":
      return action.initialState;
    default:
      return state;
  }
};

// Generic validation function based on field rules
const validateField = (name: string, value: string, validationRules?: any): string => {
  if (validationRules) {
    if (validationRules.required && !value.trim()) {
      return `${name} is required`;
    }
    if (validationRules.pattern && !validationRules.pattern.test(value)) {
      return `${name} is invalid`;
    }
    if (validationRules.minLength && value.length < validationRules.minLength) {
      return `${name} must be at least ${validationRules.minLength} characters`;
    }
  }
  return "";
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  customStyles = {},
  initialFormState,
}) => {
  // Initialize form state
  const initialState: FormState = initialFormState || {
    ...fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]:
          field.type === "multi-select" || field.type === "dropdown-multi-select"
            ? []
            : field.type === "checkbox-grid"
            ? field.checkboxGrid || []
            : "",
      }),
      {}
    ),
    errors: fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle input changes for regular fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? "true" : "false") : value;
    dispatch({ type: "SET_FIELD", field: name, value: newValue });

    // Validate field on change
    const fieldConfig = fields.find((field) => field.name === name);
    if (fieldConfig?.validationRules) {
      const error = validateField(name, newValue, fieldConfig.validationRules);
      if (error) {
        dispatch({ type: "SET_ERROR", field: name, error });
      }
    }
  };

  // Handle dropdown multi-select changes
  const handleDropdownMultiSelectChange = (name: string, value: string) => {
    const selectedValues = state[name] as string[];
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    dispatch({ type: "SET_FIELD", field: name, value: updatedValues });
  };

  // Handle checkbox grid toggle (Select/Unselect individual)
  const handleGridCheckboxChange = (name: string, rowIndex: number, colIndex: number) => {
    const grid = [...state[name]].map((row: boolean[], i: number) => {
      if (i === rowIndex) {
        return row.map((checked: boolean, j: number) => (j === colIndex ? !checked : checked));
      }
      return row;
    });
    dispatch({ type: "SET_FIELD", field: name, value: grid });
  };

  // Select/Unselect All by Row
  const toggleAllByRow = (name: string, rowIndex: number, selectAll: boolean) => {
    const grid = [...state[name]];
    grid[rowIndex] = grid[rowIndex].map(() => selectAll);
    dispatch({ type: "SET_FIELD", field: name, value: grid });
  };

  // Select/Unselect All by Column
  const toggleAllByColumn = (name: string, colIndex: number, selectAll: boolean) => {
    const grid = [...state[name]].map((row: boolean[]) => {
      return row.map((checked: boolean, i: number) => (i === colIndex ? selectAll : checked));
    });
    dispatch({ type: "SET_FIELD", field: name, value: grid });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;

    fields.forEach((field) => {
      const error = validateField(field.name, state[field.name], field.validationRules);
      if (error) {
        dispatch({ type: "SET_ERROR", field: field.name, error });
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      const formData = { ...state };
      delete formData.errors;
      onSubmit(formData);
      dispatch({ type: "RESET_FORM", initialState });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form" style={customStyles.form}>
      {fields.map((field) => (
        <div key={field.name} className="form-group" style={customStyles.fieldWrapper}>
          <label htmlFor={field.name} style={customStyles.label}>
            {field.label}
          </label>
          {field.type === "text" || field.type === "email" || field.type === "number" || field.type === "password" || field.type === "time" || field.type === "date" ? (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={state[field.name]}
              onChange={handleChange}
              className="form-control"
              style={customStyles.input}
            />
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={state[field.name]}
              onChange={handleChange}
              className="form-control"
              style={customStyles.textarea}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={state[field.name]}
              onChange={handleChange}
              className="form-control"
              style={customStyles.select}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "multi-select" ? (
            <div>
              {field.multiSelectOptions?.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option.value}
                    checked={state[field.name].includes(option.value)}
                    onChange={() => handleDropdownMultiSelectChange(field.name, option.value)}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option.label}</label>
                </div>
              ))}
            </div>
          ) : field.type === "dropdown-multi-select" ? (
            <select
              multiple
              name={field.name}
              value={state[field.name]}
              onChange={(e) =>
                Array.from(e.target.selectedOptions, (option) =>
                  handleDropdownMultiSelectChange(field.name, option.value)
                )
              }
              className="form-control"
              style={customStyles.select}
            >
              {field.multiSelectOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "checkbox-grid" ? (
            <div>
              {field.checkboxGrid?.map((row, rowIndex) => (
                <div key={rowIndex} className="d-flex">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => toggleAllByRow(field.name, rowIndex, true)}
                  >
                    Select All Row {rowIndex + 1}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => toggleAllByRow(field.name, rowIndex, false)}
                  >
                    Unselect All Row {rowIndex + 1}
                  </button>
                  {row.map((checked, colIndex) => (
                    <div key={colIndex} className="form-check">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleGridCheckboxChange(field.name, rowIndex, colIndex)}
                        className="form-check-input"
                      />
                    </div>
                  ))}
                </div>
              ))}
              <div className="mt-2">
                {field.checkboxGrid?.[0]?.map((_, colIndex) => (
                  <div key={colIndex} className="d-inline-block">
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      onClick={() => toggleAllByColumn(field.name, colIndex, true)}
                    >
                      Select All Column {colIndex + 1}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      onClick={() => toggleAllByColumn(field.name, colIndex, false)}
                    >
                      Unselect All Column {colIndex + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {state.errors[field.name] && (
            <span className="error text-danger" style={customStyles.error}>
              {state.errors[field.name]}
            </span>
          )}
        </div>
      ))}

      <button type="submit" className="btn btn-primary" style={customStyles.button}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
