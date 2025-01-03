import React, { useState } from "react";
import DynamicForm from "./DynamicForm3"; // Assuming DynamicForm is imported from your file

const SampleForm = () => {
  const [submittedData, setSubmittedData] = useState<any>(null);

  const formFields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      validationRules: { required: true },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      validationRules: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      validationRules: { required: true },
    },
    {
      name: "appointmentTime",
      label: "Appointment Time",
      type: "time",
      validationRules: { required: true },
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      validationRules: { required: true },
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
    {
      name: "skills",
      label: "Skills",
      type: "multi-select",
      multiSelectOptions: [
        { label: "JavaScript", value: "js" },
        { label: "Python", value: "python" },
        { label: "Java", value: "java" },
      ],
    },
    {
      name: "comments",
      label: "Comments",
      type: "textarea",
      validationRules: { required: false },
    },
    {
      name: "favoriteColors",
      label: "Favorite Colors (Multi-Select)",
      type: "multi-select",
      multiSelectOptions: [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
        { label: "Yellow", value: "yellow" },
      ],
    },
    {
      name: "preferredLanguages",
      label: "Preferred Languages (Dropdown Multi-Select)",
      type: "dropdown-multi-select",
      multiSelectOptions: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "French", value: "french" },
        { label: "German", value: "german" },
      ],
    },
    {
      name: "skillsMatrix",
      label: "Skills Matrix (2D Checkbox Grid)",
      type: "checkbox-grid",
      checkboxGrid: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
    },
    
  ];

  const handleSubmit = (formData: any) => {
    setSubmittedData(formData); // Store the submitted data to display after submission
  };

  return (
    <div className="container mt-4">
      <h2>Sample Form with All Input Types</h2>
      <DynamicForm fields={formFields} onSubmit={handleSubmit} />

      {submittedData && (
        <div className="mt-5">
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SampleForm;
