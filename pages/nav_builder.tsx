import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const DynamicNavForm = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: "", label: "", href: "" },
  ]);
  const [generatedNavName, setGeneratedNavName] = useState<string | null>(null);

  // Handle input changes
  const handleNavItemChange = (
    index: number,
    field: keyof NavItem,
    value: string
  ) => {
    const newNavItems = [...navItems];
    newNavItems[index][field] = value;
    setNavItems(newNavItems);
  };

  // Add a new nav item
  const addNavItem = () => {
    setNavItems([...navItems, { id: "", label: "", href: "" }]);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/generate-nav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ navItems }),
    });

    const data = await response.json();
    if (response.ok) {
      setGeneratedNavName(data.message);
    } else {
      alert("Error generating nav component");
    }
  };

  return (
    <div className="container">
      <h1>Create Dynamic Navigation Bar</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        {navItems.map((navItem, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Nav ID"
              className="form-control p-1 m-1"
              value={navItem.id}
              onChange={(e) => handleNavItemChange(index, "id", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Nav Label"
              className="form-control p-1 m-1"
              value={navItem.label}
              onChange={(e) =>
                handleNavItemChange(index, "label", e.target.value)
              }
              required
            />
            <input
              type="text"
              placeholder="Nav Href"
              className="form-control p-1 m-1"
              value={navItem.href}
              onChange={(e) =>
                handleNavItemChange(index, "href", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button className="btn btn-primary p-1 m-1" type="button" onClick={addNavItem}>
          Add Nav Item
        </button>
        <button className="btn btn-success p-1 m-1" type="submit">Generate Nav Bar</button>
        <a href="/generated-nav" className="btn btn-primary p-1 m-1">
          View Generated Forms{" "}
        </a>
      </form>

      {generatedNavName && <p>Nav Component Generated: {generatedNavName}</p>}
    </div>
  );
};

export default DynamicNavForm;
