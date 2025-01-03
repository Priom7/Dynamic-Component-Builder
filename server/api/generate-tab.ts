import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
const uuid = require("uuid4");

const dynamicComponentDir = path.join(process.cwd(), "components", "dynamicTabComponents");

const randomName = uuid().replace(/-/g, "_");
const generatedTabName = `GeneratedTab_${randomName}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { tabs } = req.body;

    // Validate tabs input
    if (!tabs || !Array.isArray(tabs)) {
      return res.status(400).json({ error: "Invalid tabs data" });
    }

    // Create component content dynamically
    const componentContent = `
import React, { useState } from 'react';

const ${generatedTabName} = () => {
  const tabs = ${JSON.stringify(tabs, null, 2)};
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div>
      <ul className="tab-header">
        {tabs.map((tab) => (
          <li key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => setActiveTab(tab.id)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? 'active' : 'hidden'}>
            <h2>{tab.title} Content</h2>
            <p>This is some dummy content for {tab.title} tab.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ${generatedTabName};
`;

    // Ensure the dynamicTabComponents directory exists
    if (!fs.existsSync(dynamicComponentDir)) {
      fs.mkdirSync(dynamicComponentDir, { recursive: true });
    }

    // Write the generated component to the dynamicTabComponents directory
    fs.writeFile(path.join(dynamicComponentDir, generatedTabName + ".tsx"), componentContent, (err) => {
      if (err) {
        console.error("Error writing component:", err);
        return res.status(500).json({ error: "Error generating tab component" });
      }

      // Optionally, format the code
      exec("npm run lint", (err) => {
        if (err) {
          console.error("Error running linter:", err);
        }
      });

      return res.status(200).json({ message: `Tab component created successfully: ${generatedTabName}` });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
