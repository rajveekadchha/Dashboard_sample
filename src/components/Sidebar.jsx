import { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

function Sidebar({ isSidebarOpen }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { name: "Home", icon: "home" },
    { name: "Analytics", icon: "insert_chart" },
    { name: "Tasks", icon: "task" },
    { name: "Account Wallet", icon: "account_balance_wallet" },
    { name: "Shopping Bag", icon: "local_mall" },
  ];

  return (
    <aside
      id="logo-sidebar"
      className={`translate-x-0 fixed left-0 z-40 w-16 h-full pt-20 transition-transform sm:translate-x-0 bg-cardBg  ${
        isSidebarOpen ? "max-sm:inline" : "max-sm:hidden"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between px-2 pb-4 overflow-y-auto  bg-[#1F1F28]">
        <ul className="space-y-2 font-medium mt-4">
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                href="/"
                onClick={() => handleTabClick(index)}
                className={`relative flex items-center justify-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  activeTab === index ? "active" : ""
                }`}
              >
                {activeTab === index && (
                  <span className="absolute -left-[7px] h-8 w-1 bg-blue-500 rounded-lg"></span>
                )}
                <MaterialSymbol
                  icon={tab.icon}
                  size={32}
                  weight={300}
                  fill={activeTab === index}
                  color={activeTab === index ? "#7194FE" : "#D7D6D8"}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/"
          className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MaterialSymbol
            icon="move_item"
            size={32}
            weight={300}
            color="#D7D6D8"
          />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
