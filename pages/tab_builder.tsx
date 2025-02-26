import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

interface Tab {
  id: string;
  title: string;
}

const DynamicTabForm = () => {
  const [tabs, setTabs] = useState<Tab[]>([{ id: "", title: "" }]);
  const [generatedTabName, setGeneratedTabName] = useState<string | null>(null);

  // Handle input changes
  const handleTabChange = (index: number, field: keyof Tab, value: string) => {
    const newTabs = [...tabs];
    newTabs[index][field] = value;
    setTabs(newTabs);
  };

  // Add a new tab
  const addTab = () => {
    setTabs([...tabs, { id: "", title: "" }]);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/generate-tab", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tabs }),
    });

    const data = await response.json();
    if (response.ok) {
      // show success toast

      toast.success("Tab component created successfully");

      setGeneratedTabName(data.message);
    } else {
      alert("Error generating tab component");
    }
  };

  return (
    <div className="container">
      <h1>Create Dynamic Tab Bar</h1>
      <form onSubmit={handleSubmit}>
        {tabs.map((tab, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Tab ID"
              value={tab.id}
              onChange={(e) => handleTabChange(index, "id", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Tab Title"
              value={tab.title}
              onChange={(e) => handleTabChange(index, "title", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addTab}>
          Add Tab
        </button>
        <button type="submit">Generate Tab Bar</button>
        <Link href="/generated-tab" className="btn btn-primary p-1 m-1">
          View Generated Tabs{" "}
        </Link>
      </form>

      {generatedTabName && <p>Tab Component Generated: {generatedTabName}</p>}
    </div>
  );
};

export default DynamicTabForm;
