import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
const uuid = require("uuid4");

const dynamicComponentDir = path.join(process.cwd(), "components", "dynamicNavComponents");

const randomName = uuid().replace(/-/g, "_");
const generatedNavName = `GeneratedNav_${randomName}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { navItems } = req.body;

    // Validate navItems input
    if (!navItems || !Array.isArray(navItems)) {
      return res.status(400).json({ error: "Invalid nav items data" });
    }

    // Create component content dynamically
    const componentContent = `
import React, { useState } from 'react';

const ${generatedNavName} = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ${JSON.stringify(navItems, null, 2)};

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={menuOpen ? 'navbar-links open' : 'navbar-links'}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ${generatedNavName};
`;

    // Ensure the dynamicNavComponents directory exists
    if (!fs.existsSync(dynamicComponentDir)) {
      fs.mkdirSync(dynamicComponentDir, { recursive: true });
    }

    // Write the generated component to the dynamicNavComponents directory
    fs.writeFile(path.join(dynamicComponentDir, generatedNavName + ".tsx"), componentContent, (err) => {
      if (err) {
        console.error("Error writing component:", err);
        return res.status(500).json({ error: "Error generating nav component" });
      }

      // Optionally, format the code
      exec("npm run lint", (err) => {
        if (err) {
          console.error("Error running linter:", err);
        }
      });

      return res.status(200).json({ message: `Nav component created successfully: ${generatedNavName}` });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
