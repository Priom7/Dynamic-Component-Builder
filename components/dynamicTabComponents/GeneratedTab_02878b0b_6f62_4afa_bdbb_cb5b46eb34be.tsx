
import React, { useState } from 'react';

const GeneratedTab_02878b0b_6f62_4afa_bdbb_cb5b46eb34be = () => {
  const tabs = [
  {
    "id": "fhrth",
    "title": "rthrth"
  },
  {
    "id": "rthrth",
    "title": "rthr"
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

export default GeneratedTab_02878b0b_6f62_4afa_bdbb_cb5b46eb34be;
