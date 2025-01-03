import React from "react";
import fs from "fs";
import path from "path";

// Helper to load components dynamically using React.lazy()
const loadDynamicComponent = (componentPath: string) => {
  return React.lazy(
    () => import(`../components/dynamicComponent/${componentPath}`)
  );
};

interface GeneratedFormPageProps {
  components: string[]; // List of components as strings (filenames without .tsx)
}

const GeneratedFormPage: React.FC<GeneratedFormPageProps> = ({
  components,
}) => {
  return (
    <div className="container">
      <h1>Showcasing Generated Forms</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* Ensure components is defined and is an array */}
        {components && components.length > 0 ? (
          components.map((component, index) => {
            const DynamicComponent = loadDynamicComponent(component);
            return (
              <div key={index} style={{margin:'20px'}} className="card" >
                <h2>{component}</h2>
                <DynamicComponent />
              </div>
            );
          })
        ) : (
          <p>No components available to showcase.</p>
        )}
      </React.Suspense>
    </div>
  );
};

// Use getStaticProps to fetch the list of components from the dynamicComponent directory
export async function getStaticProps() {
  const componentsDir = path.join(
    process.cwd(),
    "components",
    "dynamicComponent"
  );

  // Initialize components as an empty array
  let components: string[] = [];
  try {
    const files = fs.readdirSync(componentsDir);
    components = files
      .filter((file) => file.endsWith(".tsx")) // Only .tsx files
      .map((file) => file.replace(".tsx", "")); // Remove file extension
  } catch (err) {
    console.error("Error reading components directory:", err);
  }

  // Ensure we return a valid array, even if no files are found
  return {
    props: {
      components: components || [], // Return an empty array if undefined
    },
  };
}

export default GeneratedFormPage;
