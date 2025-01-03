// server-side generated component

import React, { useState } from 'react';

const GeneratedTab_4a7a1357_e730_4d20_88bd_c62219340b1e = () => {
  const tabs = [
  {
    "id": "te",
    "title": "ttete"
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

export default GeneratedTab_4a7a1357_e730_4d20_88bd_c62219340b1e;
