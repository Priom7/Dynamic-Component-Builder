import React, { useState } from "react";
import DynamicForm from "./DynamicForm";

const SampleForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const formFields = [
    { name: "fullName", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "age", label: "Age", type: "number" },
    { name: "comments", label: "Comments", type: "textarea" },
    {
      name: "favoriteColors",
      label: "Favorite Colors",
      type: "multi-select",
      multiSelectOptions: [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
      ],
    },
    {
      name: "languages",
      label: "Languages",
      type: "dropdown-multi-select",
      multiSelectOptions: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "French", value: "french" },
      ],
    },
    {
      name: "skillsGrid",
      label: "Skills Grid",
      type: "checkbox-grid",
      checkboxGrid: [
        [false, false, false], // A properly initialized 2D array
        [false, false, false],
        [false, false, false],
      ],
    },
    // other fields
  ];

  const handleSubmit = (formData: any) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <DynamicForm fields={formFields} onSubmit={handleSubmit} />
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default SampleForm;
