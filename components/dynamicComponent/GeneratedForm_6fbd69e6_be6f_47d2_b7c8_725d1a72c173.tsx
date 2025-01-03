
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_6fbd69e6_be6f_47d2_b7c8_725d1a72c173 = () => {
  const formFields = [
  {
    "name": "34",
    "label": "34",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "534534",
    "label": "345435",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "5",
        "value": "5"
      },
      {
        "label": "6",
        "value": "6"
      },
      {
        "label": "7",
        "value": "7"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_6fbd69e6_be6f_47d2_b7c8_725d1a72c173;
