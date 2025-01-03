import React from "react";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import CheckboxGrid from "./CheckboxGrid";

const FormField = ({
  field,
  value,
  onChange,
  error,
  ...extraProps
}: {
  field: any;
  value: any;
  onChange: any;
  error: any;
  [key: string]: any;
}) => {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "password":
    case "date":
    case "time":
      return (
        <TextInput
          name={field.name}
          label={field.label}
          type={field.type}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "select":
      return (
        <SelectInput
          name={field.name}
          label={field.label}
          value={value}
          options={field.options}
          onChange={onChange}
          error={error}
        />
      );
    case "radio":
      return (
        <RadioInput
          name={field.name}
          label={field.label}
          options={field.options}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
    case "multi-select":
      return (
        <SelectInput
          name={field.name}
          label={field.label}
          value={value}
          options={field.multiSelectOptions}
          onChange={onChange}
          error={error}
          multiple
        />
      );
    case "checkbox-grid":
      return (
        <CheckboxGrid
          name={field.name}
          label={field.label}
          grid={value}
          onChange={extraProps.handleGridCheckboxChange}
          toggleAllByRow={extraProps.toggleAllByRow}
          toggleAllByColumn={extraProps.toggleAllByColumn}
        />
      );
    default:
      return null;
  }
};

export default FormField;
