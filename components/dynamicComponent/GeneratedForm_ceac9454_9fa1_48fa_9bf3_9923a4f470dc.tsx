
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_ceac9454_9fa1_48fa_9bf3_9923a4f470dc = () => {
  const formFields = [
  {
    "name": "sefew",
    "label": "wgw",
    "type": "email",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "wef3r5",
    "label": "345",
    "type": "radio",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "345",
        "value": "343"
      },
      {
        "label": "667",
        "value": "767567"
      },
      {
        "label": "22",
        "value": "3453"
      }
    ]
  },
  {
    "name": "35yetrty",
    "label": "rtytr",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "erttrey",
        "value": "rtyrty"
      },
      {
        "label": "hrth",
        "value": "rhrth"
      },
      {
        "label": "rmry",
        "value": "rjrj"
      }
    ]
  },
  {
    "name": "wertert",
    "label": "eryetry",
    "type": "checkbox",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "trhrjh",
        "value": "rth"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_ceac9454_9fa1_48fa_9bf3_9923a4f470dc;
