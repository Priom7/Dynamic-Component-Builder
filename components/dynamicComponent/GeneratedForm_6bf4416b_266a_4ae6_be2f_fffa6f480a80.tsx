
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_6bf4416b_266a_4ae6_be2f_fffa6f480a80 = () => {
  const formFields = [
  {
    "name": "sad",
    "label": "asd",
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

export default GeneratedForm_6bf4416b_266a_4ae6_be2f_fffa6f480a80;
