
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_d8ee1567_4745_4fdc_a9c6_2a5b459c48cc = () => {
  const formFields = [
  {
    "name": "Name",
    "label": "Name",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "Email",
    "label": "Email",
    "type": "email",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "Password",
    "label": "Password",
    "type": "password",
    "validationRules": {},
    "errors": {}
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_d8ee1567_4745_4fdc_a9c6_2a5b459c48cc;
