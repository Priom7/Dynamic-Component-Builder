
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_6d4a06a8_c74d_4d07_9d00_dfd2483eefc3 = () => {
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
  },
  {
    "name": "Email",
    "label": "Email",
    "type": "email",
    "validationRules": {},
    "errors": {}
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_6d4a06a8_c74d_4d07_9d00_dfd2483eefc3;
