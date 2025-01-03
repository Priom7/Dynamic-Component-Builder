import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const uuid = require("uuid4");

// Path to the directory where dynamically created components will be stored
const dynamicComponentDir = path.join(process.cwd(), 'components', 'dynamicComponent');
const randomName = uuid().replace(/-/g, "_");
const generatedFormName = `GeneratedForm_${randomName}`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { formFields } = req.body;

    // Basic validation
    if (!formFields || !Array.isArray(formFields)) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    // Component content to be dynamically generated
    const componentContent = `
import React from 'react';
import DynamicForm from '../../components/form/DynamicForm';

const `+ generatedFormName + ` = () => {
  const formFields = ${JSON.stringify(formFields, null, 2)};

  const handleSubmit = (formData: any) => {
    console.log('Form Submitted:', formData);
  };

  return <DynamicForm fields={formFields} onSubmit={handleSubmit} />;
};

export default `+ generatedFormName + `;
`;

    // Ensure that the dynamicComponent directory exists
    if (!fs.existsSync(dynamicComponentDir)) {
      fs.mkdirSync(dynamicComponentDir, { recursive: true });
    }

    // Write the generated component to the dynamicComponent directory
    fs.writeFile(path.join(dynamicComponentDir, generatedFormName+`.tsx` ), componentContent, (err) => {
      if (err) {
        console.error('Error writing component:', err);
        return res.status(500).json({ error: 'Error generating form component' });
      }

      // Optionally, format the code or run any other command
      exec('npm run lint', (err) => {
        if (err) {
          console.error('Error running linter:', err);
        }
      });

      return res.status(200).json({ message: 'Form component created successfully, From Name:' + generatedFormName });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
