import React, { ChangeEvent } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SelectInput from "./SelectInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import MultiSelectDropdown from "./MultiSelectDropdown";
import CheckboxGrid from "./CheckboxGrid";

interface FormFieldProps {
  field: any;
  value: any;
  onChange: (name: string, value: any) => void;
  error: any;
  selectAllByRow?: (rowIndex: number) => void;
  selectAllByColumn?: (colIndex: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  value,
  onChange,
  error,
  selectAllByRow,
  selectAllByColumn,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(field.name, e.target.value);
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(field.name, e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(field.name, e.target.value);
  };

  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "time":
    case "date":
      return (
        <TextInput
          name={field.name}
          label={field.label}
          type={field.type}
          value={value}
          onChange={handleInputChange}
          error={error}
        />
      );

    case "textarea":
      return (
        <TextArea
          name={field.name}
          label={field.label}
          value={value}
          onChange={handleTextAreaChange}
          error={error}
        />
      );

    case "select":
      return (
        <SelectInput
          name={field.name}
          label={field.label}
          options={field.options}
          value={value}
          onChange={handleSelectChange}
          error={error}
        />
      );

    case "multi-select":
      return (
        <MultiSelectCheckbox
          name={field.name}
          label={field.label}
          options={field.multiSelectOptions}
          values={value}
          onChange={(selectedValue) => onChange(field.name, selectedValue)}
          error={error}
        />
      );

    case "dropdown-multi-select":
      return (
        <MultiSelectDropdown
          name={field.name}
          label={field.label}
          options={field.multiSelectOptions}
          values={value}
          onChange={(selectedValues) => onChange(field.name, selectedValues)}
          error={error}
        />
      );

    case "checkbox-grid":
      return (
        <CheckboxGrid
          name={field.name}
          label={field.label}
          grid={value}
          onChange={(rowIndex, colIndex) =>
            onChange(field.name, { rowIndex, colIndex })
          }
          selectAllByRow={(rowIndex) =>
            selectAllByRow && selectAllByRow(rowIndex)
          }
          selectAllByColumn={(colIndex) =>
            selectAllByColumn && selectAllByColumn(colIndex)
          }
          error={error}
        />
      );

    default:
      return null;
  }
};

export default FormField;
