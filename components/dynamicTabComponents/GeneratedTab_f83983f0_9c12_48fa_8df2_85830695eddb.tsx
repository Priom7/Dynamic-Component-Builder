
import React, { useState } from 'react';

const GeneratedTab_f83983f0_9c12_48fa_8df2_85830695eddb = () => {
  const tabs = [
  {
    "id": "te",
    "title": "ttete"
  },
  {
    "id": "sdg",
    "title": "rgdfg"
  },
  {
    "id": "wertewr",
    "title": "345345"
  },
  {
    "id": "derfghfdg",
    "title": "erterg"
  },
  {
    "id": "erg",
    "title": "4343"
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

export default GeneratedTab_f83983f0_9c12_48fa_8df2_85830695eddb;
