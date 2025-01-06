
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_5029145b_bd60_4596_8ff5_c39c209dcaf0 = () => {
  const formFields = [
  {
    "name": "Gender",
    "label": "Gender",
    "type": "radio",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "Male",
        "value": "1"
      },
      {
        "label": "Female",
        "value": "2"
      }
    ]
  },
  {
    "name": "Role",
    "label": "Role",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "Admin",
        "value": "1"
      },
      {
        "label": "User",
        "value": "2"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_5029145b_bd60_4596_8ff5_c39c209dcaf0;
