
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_205ebb8a_01eb_4a46_b58d_c79c56226794 = () => {
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
  },
  {
    "name": "Gender",
    "label": "Gender",
    "type": "radio",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "male",
        "value": "Male"
      },
      {
        "label": "female",
        "value": "Female"
      }
    ]
  },
  {
    "name": "Accept Agreement",
    "label": "Accept All Agreements",
    "type": "checkbox",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "yes",
        "value": "YES"
      },
      {
        "label": "no",
        "value": "NO"
      },
      {
        "label": "Maybe",
        "value": "Maybe"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_205ebb8a_01eb_4a46_b58d_c79c56226794;
