
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const GeneratedForm_1f930fb1_de53_4f82_9717_4c817babe19b = () => {
  const formFields = [
  {
    "name": "p1",
    "label": "Programming Languages",
    "type": "select",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "java",
        "value": "Java"
      },
      {
        "label": "python",
        "value": "Python"
      },
      {
        "label": "c",
        "value": "C"
      },
      {
        "label": "c++",
        "value": "C++"
      },
      {
        "label": "js",
        "value": "JS"
      }
    ]
  },
  {
    "name": "fromwork",
    "label": "Framework",
    "type": "checkbox",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "laravel",
        "value": "Laravel"
      },
      {
        "label": "next",
        "value": "Next JS"
      }
    ]
  },
  {
    "name": "databse",
    "label": "Database",
    "type": "checkbox",
    "validationRules": {},
    "errors": {},
    "options": [
      {
        "label": "mysql",
        "value": "MySQL"
      },
      {
        "label": "mongo",
        "value": "MongoDb"
      }
    ]
  }
];

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default GeneratedForm_1f930fb1_de53_4f82_9717_4c817babe19b;
