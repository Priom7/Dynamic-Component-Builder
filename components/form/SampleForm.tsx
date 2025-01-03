import React, { useState } from 'react';
import DynamicForm from './DynamicForm';

const SampleForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const formFields = [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'age', label: 'Age', type: 'number', required: true },
    {
      name: 'languages',
      label: 'Languages',
      type: 'multi-select',
      multiSelectOptions: [
        { label: 'English', value: 'english' },
        { label: 'Spanish', value: 'spanish' },
        { label: 'French', value: 'french' },
      ],
      required: true,
    },
    {
      name: 'skillsGrid',
      label: 'Skills Grid',
      type: 'checkbox-grid',
      checkboxGrid: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
      required: true,
    },
  ];

  const handleSubmit = (data: { [key: string]: string }) => {
    // Perform validation
    const errors: { [key: string]: string } = {};
    formFields.forEach((field) => {
      if (field.required && !data[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      // Handle validation errors
      console.log('Validation errors:', errors);
      return;
    }

    // Validation passed, submit the data
    setSubmittedData(data);
  };

  return (
    <div>
      <DynamicForm fields={formFields} onSubmit={handleSubmit} />
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </div>
  );
};

export default SampleForm;