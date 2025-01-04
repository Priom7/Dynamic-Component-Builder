import React, { useReducer } from "react";

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
  options?: Array<{ label: string; value: string }>; // For select and radio inputs
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
const validateField = (
  name: string,
  value: string,
  validationRules?: any
): string => {
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
          field.type === "multi-select" ||
          field.type === "dropdown-multi-select"
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

  // Centralized handleChange method for input fields
  const handleChange = (name: string, value: any) => {
    dispatch({ type: "SET_FIELD", field: name, value });

    // Validate field on change
    const fieldConfig = fields.find((field) => field.name === name);
    if (fieldConfig?.validationRules) {
      const error = validateField(name, value, fieldConfig.validationRules);
      if (error) {
        dispatch({ type: "SET_ERROR", field: name, error });
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;

    fields.forEach((field) => {
      const error = validateField(
        field.name,
        state[field.name],
        field.validationRules
      );
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
    <form
      onSubmit={handleSubmit}
      className="dynamic-form"
      style={{
        ...customStyles.form,
        backgroundColor: "#3e3e3e",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        color: "#fff",
      }}
    >
      {fields.map((field) => (
        <div
          key={field.name}
          className="form-group"
          style={{
            ...customStyles.fieldWrapper,
            marginBottom: "15px",
          }}
        >
          <label
            htmlFor={field.name}
            style={{
              ...customStyles.label,
              display: "block",
              marginBottom: "5px",
              color: "#ffffff",
            }}
          >
            {field.label}
          </label>

          {/* Text, Email, Number, Password, Date, Time */}
          {(field.type === "text" ||
            field.type === "email" ||
            field.type === "number" ||
            field.type === "password" ||
            field.type === "time" ||
            field.type === "date") && (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={state[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="form-control"
              style={{
                ...customStyles.input,
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}

          {/* Textarea */}
          {field.type === "textarea" && (
            <textarea
              id={field.name}
              name={field.name}
              value={state[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="form-control"
              style={{
                ...customStyles.textarea,
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          )}

          {/* Single Select */}
          {field.type === "select" && (
            <select
              id={field.name}
              name={field.name}
              value={state[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="form-control"
              style={{
                ...customStyles.select,
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {/* Radio Input */}
          {field.type === "radio" && (
            <div>
              {field.options?.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={state[field.name] === option.value}
                    onChange={() => handleChange(field.name, option.value)}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option.label}</label>
                </div>
              ))}
            </div>
          )}

          {/* Multi-Select (Checkboxes) */}
          {field.type === "multi-select" && (
            <div>
              {field.multiSelectOptions?.map((option) => (
                <div key={option.value} className="form-check">
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option.value}
                    checked={state[field.name].includes(option.value)}
                    onChange={() =>
                      handleChange(
                        field.name,
                        state[field.name].includes(option.value)
                          ? state[field.name].filter(
                              (v: string) => v !== option.value
                            )
                          : [...state[field.name], option.value]
                      )
                    }
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option.label}</label>
                </div>
              ))}
            </div>
          )}

          {/* Dropdown Multi-Select */}
          {field.type === "dropdown-multi-select" && (
            <select
              multiple
              name={field.name}
              value={state[field.name]}
              onChange={(e) =>
                handleChange(
                  field.name,
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="form-control"
              style={{
                ...customStyles.select,
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              {field.multiSelectOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {/* Checkbox Grid */}
          {field.type === "checkbox-grid" && (
            <div>
              <div className="d-flex mb-2">
                <select
                  className="form-select me-2"
                  onChange={(e) => {
                    const colIndex = parseInt(e.target.value);
                    if (!isNaN(colIndex)) {
                      const newGrid = state[field.name].map((row: boolean[]) =>
                        row.map((_, ci) => (ci === colIndex ? true : _))
                      );
                      handleChange(field.name, newGrid);
                    }
                  }}
                >
                  <option value="">Select All Column</option>
                  {state[field.name][0]?.map((_, colIndex: number) => (
                    <option key={colIndex} value={colIndex}>
                      Column {colIndex + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select"
                  onChange={(e) => {
                    const colIndex = parseInt(e.target.value);
                    if (!isNaN(colIndex)) {
                      const newGrid = state[field.name].map((row: boolean[]) =>
                        row.map((_, ci) => (ci === colIndex ? false : _))
                      );
                      handleChange(field.name, newGrid);
                    }
                  }}
                >
                  <option value="">Unselect All Column</option>
                  {state[field.name][0]?.map((_, colIndex: number) => (
                    <option key={colIndex} value={colIndex}>
                      Column {colIndex + 1}
                    </option>
                  ))}
                </select>
              </div>
              {state[field.name]?.map((row: boolean[], rowIndex: number) => (
                <div key={rowIndex} className="d-flex mb-2">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() =>
                      handleChange(
                        field.name,
                        state[field.name].map((r: boolean[], ri: number) =>
                          ri === rowIndex ? r.map(() => true) : r
                        )
                      )
                    }
                  >
                    Select All Row {rowIndex + 1}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() =>
                      handleChange(
                        field.name,
                        state[field.name].map((r: boolean[], ri: number) =>
                          ri === rowIndex ? r.map(() => false) : r
                        )
                      )
                    }
                  >
                    Unselect All Row {rowIndex + 1}
                  </button>
                  {row.map((checked: boolean, colIndex: number) => (
                    <div key={colIndex} className="form-check">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          handleChange(
                            field.name,
                            state[field.name].map((r: boolean[], ri: number) =>
                              ri === rowIndex
                                ? r.map((c, ci) =>
                                    ci === colIndex ? !c : c
                                  )
                                : r
                            )
                          )
                        }
                        className="form-check-input"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Validation Error */}
          {state.errors[field.name] && (
            <span
              className="error text-danger"
              style={{
                ...customStyles.error,
                color: "red",
                marginTop: "5px",
                display: "block",
              }}
            >
              {state.errors[field.name]}
            </span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="btn btn-primary"
        style={{
          ...customStyles.button,
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
