
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_1655e293_eed3_4812_a4fc_d9f0c1cf61fe = () => {
  const formFields = [
  {
    "name": "Test2",
    "label": "TEST TEST",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "lkj",
        "value": "098"
      },
      {
        "label": "knk",
        "value": "098"
      },
      {
        "label": "jhi",
        "value": "9879"
      }
    ]
  },
  {
    "name": "jhg",
    "label": "iuhi",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "trytfvgv",
    "label": "hufguygu",
    "type": "number",
    "validationRules": {},
    "errors": {}
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_1655e293_eed3_4812_a4fc_d9f0c1cf61fe;
