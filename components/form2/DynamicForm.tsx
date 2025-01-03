import React, { useReducer } from "react";
import FormField from "./FormField";

// Define the structure of the form state
interface FormState {
  [key: string]: any;
  errors?: {
    [key: string]: string;
  };
}

// Define action types for the reducer
interface FormAction {
  type: string;
  field?: string;
  value?: any;
  initialState?: FormState | undefined;
}

// The reducer to handle form state updates
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field!]: action.value,
        errors: { ...state.errors, [action.field!]: "" }, // Clear error when field is updated
      };
    case "RESET_FORM":
      return action.initialState!;
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field!]: action.value },
      };
    default:
      return state;
  }
};

// Define the props expected by DynamicForm
interface DynamicFormProps {
  fields: {
    name: string;
    label: string;
    type: string;
    options?: Array<{ label: string; value: string }>;
    multiSelectOptions?: Array<{ label: string; value: string }>;
    checkboxGrid?: boolean[][];
  }[];
  onSubmit: (state: FormState) => void;
  initialState?: FormState;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  initialState = {},
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle input change for all field types
  const handleChange = (name: string, value: any) => {
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any additional validations if needed, and call onSubmit
    onSubmit(state);
  };

  // Select all checkboxes in a row for checkbox-grid
  const selectAllByRow = (name: string, rowIndex: number) => {
    const updatedGrid = [...state[name]]; // Make a shallow copy of the grid
    updatedGrid[rowIndex] = updatedGrid[rowIndex].map(() => true); // Set all values in the row to true
    handleChange(name, updatedGrid); // Update state
  };

  // Select all checkboxes in a column for checkbox-grid
  const selectAllByColumn = (name: string, colIndex: number) => {
    const updatedGrid = state[name].map((row: boolean[]) => {
      return row.map((checked, index) => (index === colIndex ? true : checked));
    });
    handleChange(name, updatedGrid); // Update state
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={state[field.name] || ""}
          onChange={handleChange}
          error={state.errors?.[field.name]}
          selectAllByRow={(rowIndex: number) =>
            selectAllByRow(field.name, rowIndex)
          }
          selectAllByColumn={(colIndex: number) =>
            selectAllByColumn(field.name, colIndex)
          }
        />
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
