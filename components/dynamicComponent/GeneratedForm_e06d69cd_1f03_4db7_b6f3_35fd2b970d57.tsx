
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_e06d69cd_1f03_4db7_b6f3_35fd2b970d57 = () => {
  const formFields = [
  {
    "name": "thrh",
    "label": "rnrtnr",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "fnfgn",
        "value": "t"
      },
      {
        "label": "rnnngfn",
        "value": "5"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_e06d69cd_1f03_4db7_b6f3_35fd2b970d57;
