import React, { useState } from "react";
import axios from "axios";

// Define the structure of form fields
interface Option {
  label: string;
  value: string;
}

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  pattern?: string;
}

interface FormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "select"
    | "radio"
    | "checkbox"
    | "textarea";
  options?: Option[];
  validationRules: ValidationRules;
  errors?: { [key: string]: string };
}

const FormBuilder = () => {
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: "", label: "", type: "text", validationRules: {}, errors: {} },
  ]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Define valid keys for FormField that can be updated
  type FieldKey = keyof FormField;
  type OptionKey = keyof Option;

  // Handle changes for a specific field
  const handleFieldChange = (index: number, field: FieldKey, value: any) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  // Handle changes for options (used in select, radio, checkbox fields)
  const handleOptionChange = (
    fieldIndex: number,
    optionIndex: number,
    value: string,
    key: OptionKey
  ) => {
    const updatedFields = [...formFields];
    if (updatedFields[fieldIndex].options) {
      updatedFields[fieldIndex].options![optionIndex][key] = value;
      setFormFields(updatedFields);
    }
  };

  // Add new option for fields like select, radio, and checkbox
  const addOption = (fieldIndex: number) => {
    const updatedFields = [...formFields];
    if (!updatedFields[fieldIndex].options)
      updatedFields[fieldIndex].options = [];
    updatedFields[fieldIndex].options.push({ label: "", value: "" });
    setFormFields(updatedFields);
  };

  // Add a new form field
  const addField = () => {
    setFormFields([
      ...formFields,
      { name: "", label: "", type: "text", validationRules: {}, errors: {} },
    ]);
  };

  // Validate each field before submission
  const validateFields = () => {
    let isValid = true;
    const updatedFields = formFields.map((field) => {
      const errors: { [key: string]: string } = {};

      if (field.validationRules.required && !field.name) {
        errors.name = "Field name is required.";
        isValid = false;
      }

      if (field.validationRules.required && !field.label) {
        errors.label = "Field label is required.";
        isValid = false;
      }

      if (
        field.validationRules.minLength &&
        field.name.length < field.validationRules.minLength
      ) {
        errors.minLength = `Minimum length should be ${field.validationRules.minLength}.`;
        isValid = false;
      }

      if (
        field.validationRules.pattern &&
        !new RegExp(field.validationRules.pattern).test(field.name)
      ) {
        errors.pattern = `Pattern does not match the required format.`;
        isValid = false;
      }

      return { ...field, errors };
    });

    setFormFields(updatedFields);
    return isValid;
  };

  // Handle form submission and validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateFields();
    if (!isValid) {
      setErrorMessage("Please fix the errors in the form.");
      return;
    }

    try {
      await axios.post("/api/generate-form", { formFields });
      alert("Form component created successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Error generating form component.");
    }
  };

  return (
    <div className="container">
      <h1>Form Builder</h1>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} className="form-group">
            {/* Name */}
            <label>Name</label>
            <input
              type="text"
              className={`form-control ${
                field.errors?.name ? "is-invalid" : ""
              }`}
              value={field.name}
              onChange={(e) => handleFieldChange(index, "name", e.target.value)}
              placeholder="Field Name"
              required
            />
            {field.errors?.name && (
              <div className="invalid-feedback">{field.errors.name}</div>
            )}

            {/* Label */}
            <label>Label</label>
            <input
              type="text"
              className={`form-control ${
                field.errors?.label ? "is-invalid" : ""
              }`}
              value={field.label}
              onChange={(e) =>
                handleFieldChange(index, "label", e.target.value)
              }
              placeholder="Field Label"
              required
            />
            {field.errors?.label && (
              <div className="invalid-feedback">{field.errors.label}</div>
            )}

            {/* Type */}
            <label>Type</label>
            <select
              className="form-control"
              value={field.type}
              onChange={(e) => handleFieldChange(index, "type", e.target.value)}
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
              <option value="password">Password</option>
              <option value="select">Select</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="textarea">Textarea</option>
            </select>

            {/* Dynamic options for select, radio, checkbox */}
            {(field.type === "select" ||
              field.type === "radio" ||
              field.type === "checkbox") && (
              <div className="mt-3">
                <h5>Options</h5>
                {field.options?.map((option, optIndex) => (
                  <div key={optIndex} className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={option.label}
                      onChange={(e) =>
                        handleOptionChange(
                          index,
                          optIndex,
                          e.target.value,
                          "label"
                        )
                      }
                      placeholder="Option Label"
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={option.value}
                      onChange={(e) =>
                        handleOptionChange(
                          index,
                          optIndex,
                          e.target.value,
                          "value"
                        )
                      }
                      placeholder="Option Value"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-sm btn-secondary mb-3"
                  onClick={() => addOption(index)}
                >
                  Add Option
                </button>
              </div>
            )}

            {/* Validation Rules */}
            <div className="mt-3">
              <h5>Validation Rules</h5>
              <label>
                <input
                  type="checkbox"
                  checked={field.validationRules.required || false}
                  onChange={(e) =>
                    handleFieldChange(index, "validationRules", {
                      ...field.validationRules,
                      required: e.target.checked,
                    })
                  }
                />{" "}
                Required
              </label>
              <div className="form-group">
                <label>Min Length</label>
                <input
                  type="number"
                  className="form-control"
                  value={field.validationRules.minLength || ""}
                  onChange={(e) =>
                    handleFieldChange(index, "validationRules", {
                      ...field.validationRules,
                      minLength: e.target.value
                        ? parseInt(e.target.value)
                        : undefined,
                    })
                  }
                  placeholder="Min Length"
                />
              </div>
              <div className="form-group">
                <label>Pattern (Regex)</label>
                <input
                  type="text"
                  className="form-control"
                  value={field.validationRules.pattern || ""}
                  onChange={(e) =>
                    handleFieldChange(index, "validationRules", {
                      ...field.validationRules,
                      pattern: e.target.value || undefined,
                    })
                  }
                  placeholder="Pattern"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary p-1 m-1"
          onClick={addField}
        >
          Add Field
        </button>
        <button type="submit" className="btn btn-primary p-1 m-1">
          Generate Form Component
        </button>
        <a href="/generated-form" className="btn btn-primary p-1 m-1">
          View Generated Forms{" "}
        </a>
      </form>
    </div>
  );
};

export default FormBuilder;
