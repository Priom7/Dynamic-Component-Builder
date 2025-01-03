import React from "react";
import fs from "fs";
import path from "path";

const loadDynamicComponent = (componentPath: string) => {
    try {
        return React.lazy(() => import(`../components/dynamicTableComponents/${componentPath}`));
    } catch (error) {
        console.error("Error loading dynamic component:", error);
        return () => <div>Component not created yet</div>;
    }
};

interface GeneratedTablePageProps {
  components: string[];
}

const GeneratedTablePage: React.FC<GeneratedTablePageProps> = ({ components }) => {
  return (
    <div className="container">
      <h1>Generated Dynamic Tables</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        {components && components.length > 0 ? (
          components.map((component, index) => {
            const DynamicComponent = loadDynamicComponent(component);
            return (
              <div key={index} className="card" style={{ margin: "20px" }}>
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

export async function getStaticProps() {
  const componentsDir = path.join(process.cwd(), "components", "dynamicTableComponents");

  let components: string[] = [];
  try {
    const files = fs.readdirSync(componentsDir);
    components = files.filter((file) => file.endsWith(".tsx")).map((file) => file.replace(".tsx", ""));
  } catch (err) {
    console.error("Error reading components directory:", err);
  }

  return {
    props: {
      components: components || [],
    },
  };
}

export default GeneratedTablePage;
