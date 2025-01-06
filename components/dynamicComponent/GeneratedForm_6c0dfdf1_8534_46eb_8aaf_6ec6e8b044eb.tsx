
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_6c0dfdf1_8534_46eb_8aaf_6ec6e8b044eb = () => {
  const formFields = [
  {
    "name": "Name",
    "label": "Name",
    "type": "text",
    "validationRules": {
      "required": true,
      "minLength": 1
    },
    "errors": {}
  },
  {
    "name": "Email",
    "label": "Email",
    "type": "email",
    "validationRules": {
      "required": true,
      "minLength": 1
    },
    "errors": {}
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_6c0dfdf1_8534_46eb_8aaf_6ec6e8b044eb;
