import React, { useState } from "react";
import axios from "axios";

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
  type: "text" | "email" | "number" | "password" | "select" | "radio" | "checkbox" | "textarea";
  options?: Option[];
  validationRules: ValidationRules;
  errors: Record<string, string>;
}

const FormBuilder = () => {
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: "", label: "", type: "text", validationRules: {}, errors: {} },
  ]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  type FieldKey = keyof FormField;
  type OptionKey = keyof Option;

  const handleFieldChange = (index: number, field: FieldKey, value: any) => {
    setFormFields((prevFields) =>
      prevFields.map((f, i) =>
        i === index ? { ...f, [field]: value } : f
      )
    );
  };

  const handleOptionChange = (fieldIndex: number, optionIndex: number, value: string, key: OptionKey) => {
    setFormFields((prevFields) =>
      prevFields.map((field, i) =>
        i === fieldIndex
          ? {
              ...field,
              options: field.options?.map((opt, j) =>
                j === optionIndex ? { ...opt, [key]: value } : opt
              ) || [],
            }
          : field
      )
    );
  };

  const addOption = (fieldIndex: number) => {
    setFormFields((prevFields) =>
      prevFields.map((field, i) =>
        i === fieldIndex
          ? { ...field, options: [...(field.options || []), { label: "", value: "" }] }
          : field
      )
    );
  };

  const addField = () => {
    setFormFields([...formFields, { name: "", label: "", type: "text", validationRules: {}, errors: {} }]);
  };

  const validateFields = () => {
    let isValid = true;
    const updatedFields = formFields.map((field) => {
      const errors: Record<string, string> = {};
      if (field.validationRules.required && !field.name) {
        errors.name = "Field name is required.";
        isValid = false;
      }
      if (field.validationRules.required && !field.label) {
        errors.label = "Field label is required.";
        isValid = false;
      }
      if (field.validationRules.minLength && field.name.length < field.validationRules.minLength) {
        errors.minLength = `Minimum length should be ${field.validationRules.minLength}.`;
        isValid = false;
      }
      if (field.validationRules.pattern && !new RegExp(field.validationRules.pattern).test(field.name)) {
        errors.pattern = "Pattern does not match the required format.";
        isValid = false;
      }
      return { ...field, errors };
    });
    setFormFields(updatedFields);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) {
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
            <label>Name</label>
            <input
              type="text"
              className={`form-control ${field.errors.name ? "is-invalid" : ""}`}
              value={field.name}
              onChange={(e) => handleFieldChange(index, "name", e.target.value)}
              required
            />
            <label>Label</label>
            <input
              type="text"
              className={`form-control ${field.errors.label ? "is-invalid" : ""}`}
              value={field.label}
              onChange={(e) => handleFieldChange(index, "label", e.target.value)}
              required
            />
            <label>Type</label>
            <select
              className="form-control"
              value={field.type}
              onChange={(e) => handleFieldChange(index, "type", e.target.value)}
            >
              {["text", "email", "number", "password", "select", "radio", "checkbox", "textarea"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {(field.type === "select" || field.type === "radio" || field.type === "checkbox") && (
              <>
                <h5>Options</h5>
                {field.options?.map((option, optIndex) => (
                  <div key={optIndex} className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={option.label}
                      onChange={(e) => handleOptionChange(index, optIndex, e.target.value, "label")}
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={option.value}
                      onChange={(e) => handleOptionChange(index, optIndex, e.target.value, "value")}
                      required
                    />
                  </div>
                ))}
                <button type="button" className="btn btn-sm btn-secondary" onClick={() => addOption(index)}>
                  Add Option
                </button>
              </>
            )}
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={addField}>Add Field</button>
        <button type="submit" className="btn btn-primary">Generate Form</button>
      </form>
    </div>
  );
};

export default FormBuilder;
