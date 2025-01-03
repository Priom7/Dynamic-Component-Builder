
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_6cc2a296_a540_4f8f_a46a_4786589cf840 = () => {
  const formFields = [
  {
    "name": "student_name",
    "label": "Name",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "departmenet",
    "label": "Department",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "intake",
    "label": "Intake",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "dob",
    "label": "Date of Birth",
    "type": "text",
    "validationRules": {},
    "errors": {}
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_6cc2a296_a540_4f8f_a46a_4786589cf840;
