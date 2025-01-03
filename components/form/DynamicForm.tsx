import React, { useReducer } from 'react';
import FormField from './FormField';

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return action.initialState;
    default:
      return state;
  }
};

const DynamicForm = ({ fields, onSubmit, initialState = {} }: any) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (name: string, value: any) => {
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(state);
  };

  const handleGridCheckboxChange = (fieldName: string, rowIndex: number, colIndex: number) => {
    const grid = [...state[fieldName]];
    grid[rowIndex][colIndex] = !grid[rowIndex][colIndex];
    handleChange(fieldName, grid);
  };

  const toggleAllByRow = (fieldName: string, rowIndex: number, selectAll: boolean) => {
    const grid = [...state[fieldName]];
    grid[rowIndex] = grid[rowIndex].map(() => selectAll);
    handleChange(fieldName, grid);
  };

  const toggleAllByColumn = (fieldName: string, colIndex: number, selectAll: boolean) => {
    const grid = [...state[fieldName]];
    grid.forEach(row => {
      row[colIndex] = selectAll;
    });
    handleChange(fieldName, grid);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field: any) => (
        <FormField
          key={field.name}
          field={field}
          value={state[field.name]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.name, e.target.value)}
          handleGridCheckboxChange={(rowIndex: number, colIndex: number) =>
            handleGridCheckboxChange(field.name, rowIndex, colIndex)
          }
          toggleAllByRow={(rowIndex: number) => toggleAllByRow(field.name, rowIndex, true)}
          toggleAllByColumn={(colIndex: number) => toggleAllByColumn(field.name, colIndex, true)}
          error={state.errors && state.errors[field.name]}
        />
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default DynamicForm;