import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
const uuid = require("uuid4");

const dynamicComponentDir = path.join(process.cwd(), "components", "dynamicTableComponents");

const randomName = uuid().replace(/-/g, "_");
const generatedTableName = `GeneratedTable_${randomName}`;

// Function to generate 20 dummy rows of data
const generateDummyData = (columns: { field: string }[]) => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    const row: { [key: string]: string } = {};
    columns.forEach((col) => {
      row[col.field] = Math.random().toString(36).substring(7); // Random alphanumeric string
    });
    data.push(row);
  }
  return data;
};

// Function to generate filters based on columns
const generateFilters = (columns: { field: string }[]) => {
  return columns.map((col) => ({ field: col.field, value: "" }));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { columns } = req.body;

    // Validate that columns is an array
    if (!columns || !Array.isArray(columns)) {
      return res.status(400).json({ error: "Invalid columns data" });
    }

    // Generate dummy data and filters
    const dummyData = generateDummyData(columns);
    const filters = generateFilters(columns);

    // Component content to be dynamically generated
    const componentContent = `
import React from 'react';
import DynamicTable from '../../components/form/DynamicTable';
import { Filter } from '../../types';

const ${generatedTableName} = () => {
  const columns = ${JSON.stringify(columns, null, 2)};
  const data = ${JSON.stringify(dummyData, null, 2)}; // Dummy data for the table

  const filters: Filter[] = ${JSON.stringify(filters, null, 2)}; // Dynamically applied filters

  return <DynamicTable columns={columns} data={data} filters={filters} />;
};

export default ${generatedTableName};
`;

    // Ensure that the directory exists
    if (!fs.existsSync(dynamicComponentDir)) {
      fs.mkdirSync(dynamicComponentDir, { recursive: true });
    }

    // Write the generated component to the dynamicComponent directory
    fs.writeFile(
      path.join(dynamicComponentDir, generatedTableName + ".tsx"),
      componentContent,
      (err) => {
        if (err) {
          console.error("Error writing component:", err);
          return res.status(500).json({ error: "Error generating table component" });
        }

        // Optionally, format the code
        exec("npm run lint", (err) => {
          if (err) {
            console.error("Error running linter:", err);
          }
        });

        return res.status(200).json({ message: `Table component created successfully: ${generatedTableName}` });
      }
    );
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
