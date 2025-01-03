
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_81bd7f86_4964_476e_bf2b_f3c7b0017079 = () => {
  const formFields = [
  {
    "name": "school",
    "label": "School Name",
    "type": "text",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "result",
    "label": "Result",
    "type": "number",
    "validationRules": {},
    "errors": {}
  },
  {
    "name": "Recent Degree",
    "label": "Recent Degree",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "bsc",
        "value": "BSc"
      },
      {
        "label": "msc",
        "value": "MSc"
      },
      {
        "label": "hsc",
        "value": "HSC"
      },
      {
        "label": "ssc",
        "value": "SSC"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_81bd7f86_4964_476e_bf2b_f3c7b0017079;
