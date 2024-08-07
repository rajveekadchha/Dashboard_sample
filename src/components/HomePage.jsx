import React from "react";
import SearchBox from "./SearchBox";
import userImg from "../assets/userimg.jpeg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { MaterialSymbol } from "react-material-symbols";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  function toggleDropdown() {
    setIsNavOpen(!isNavOpen);
    console.log("isNavOpen", isNavOpen);
  }

  // Close the dropdown if clicked outside
  //   window.onclick = function (event) {
  //     if (!event.target.matches(".user-button")) {
  //       setIsNavOpen(false);
  //       const dropdown = document.getElementById("dropdown");
  //       if (!dropdown.classList.contains("hidden")) {
  //         dropdown.classList.add("hidden");
  //       }
  //     }
  //   };

  return (
    <>
      <nav class="fixed top-0 z-50 w-screen bg-cardBg">
        <div class="px-3 py-3 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start md:justify-end burger-menu">
              <button
                onClick={toggleSidebar}
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http:www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ms-2 md:me-24" className="logo">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 11.5C0 5.14873 5.14873 0 11.5 0V0C17.8513 0 23 5.14873 23 11.5V11.5C23 17.8513 17.8513 23 11.5 23H2.09091C0.936131 23 0 22.0639 0 20.9091V11.5Z"
                    fill="#7193FA"
                  />
                  <path
                    d="M0 36.5C0 30.1487 5.14873 25 11.5 25V25C17.8513 25 23 30.1487 23 36.5V45.9091C23 47.0639 22.0639 48 20.9091 48H11.5C5.14873 48 0 42.8513 0 36.5V36.5Z"
                    fill="#7193FA"
                  />
                  <path
                    d="M25 36.5C25 30.1487 30.1487 25 36.5 25H45.9091C47.0639 25 48 25.9361 48 27.0909V36.5C48 42.8513 42.8513 48 36.5 48V48C30.1487 48 25 42.8513 25 36.5V36.5Z"
                    fill="#7193FA"
                  />
                  <path
                    d="M25 2.09091C25 0.936131 25.9361 0 27.0909 0H36.5C42.8513 0 48 5.14873 48 11.5V11.5C48 17.8513 42.8513 23 36.5 23V23C30.1487 23 25 17.8513 25 11.5V2.09091Z"
                    fill="#7193FA"
                  />
                </svg>
              </a>
              <SearchBox />
            </div>

            <div class="flex items-center  accounts">
              <div class="flex items-center ms-3 gap-6 ">
                <div class="max-sm:hidden flex gap-4">
                  <div>
                    <button
                      type="button"
                      class="flex items-center justify-center text-sm bg-white/20 rounded-full focus:ring-4 w-10 h-10"
                      aria-expanded="false"
                    >
                      <MaterialSymbol
                        icon="email"
                        size={24}
                        weight={300}
                        color="#D7D6D8"
                      />
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="flex items-center justify-center text-sm bg-white/20 rounded-full w-10 h-10"
                      aria-expanded="false"
                    >
                      <MaterialSymbol
                        icon="settings"
                        size={24}
                        weight={300}
                        color="#D7D6D8"
                      />
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="flex items-center justify-center text-sm bg-white/20 rounded-full w-10 h-10"
                      aria-expanded="false"
                    >
                      <MaterialSymbol
                        icon="notifications"
                        size={24}
                        weight={300}
                        color="#D7D6D8"
                      />
                      <div className="w-3 h-3 absolute bg-accent mb-4 ml-4 rounded-full"></div>
                    </button>
                  </div>
                </div>

                {/* <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src={userImg}
                      alt="user img"
                    />
                  </button>
                </div> */}

                <div class="relative">
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full"
                    aria-expanded="false"
                    onClick={toggleDropdown}
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src={userImg}
                      alt="user img"
                    />
                  </button>

                  <div
                    id="dropdown"
                    className={`absolute right-1 mt-2 w-48 bg-cardHighBg sm:hidden rounded-lg ${
                      isNavOpen ? "max-sm:block" : "max-sm:hidden"
                    }`}
                  >
                    <ul class="py-1">
                      <li>
                        <a
                          href="/"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          Notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Dashboard />
    </>
  );
};

export default HomePage;
