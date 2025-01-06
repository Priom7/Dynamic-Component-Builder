
import React, { useState } from 'react';

const GeneratedTab_bc97d10e_cdaf_4a31_a73e_e0857edb1ed4 = () => {
  const tabs = [
  {
    "id": "1",
    "title": "Home"
  },
  {
    "id": "2",
    "title": "Timeline"
  },
  {
    "id": "3",
    "title": "Profile/{id}"
  }
];
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

export default GeneratedTab_bc97d10e_cdaf_4a31_a73e_e0857edb1ed4;
