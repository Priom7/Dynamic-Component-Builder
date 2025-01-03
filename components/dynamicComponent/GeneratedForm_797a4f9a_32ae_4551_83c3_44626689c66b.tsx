
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_797a4f9a_32ae_4551_83c3_44626689c66b = () => {
  const formFields = [
  {
    "name": "name",
    "label": "First Name",
    "type": "text",
    "validationRules": {
      "required": false
    },
    "errors": {}
  },
  {
    "name": "Options for Select",
    "label": "Seclect here",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "test",
        "value": "1"
      },
      {
        "label": "test2",
        "value": "2"
      },
      {
        "label": "3",
        "value": "3"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_797a4f9a_32ae_4551_83c3_44626689c66b;
