import React from "react";

export default function Options() {
  const items = [
    {
      title: "Goals",
      bgColor: "bg-[#441818]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="#d33c3c"
            d="M11 2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07V2m-2 4.08V8h2V6.09c2.5.41 4.5 2.41 4.92 4.91H16v2h1.91c-.41 2.5-2.41 4.5-4.91 4.92V16h-2v1.91C8.5 17.5 6.5 15.5 6.08 13H8v-2H6.09C6.5 8.5 8.5 6.5 11 6.08M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"
          />
        </svg>
      ),
    },
    {
      title: "Popular Dishes",
      bgColor: "bg-[#0a3671]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#2f88ff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.35"
          >
            <path d="m15 15l3.379-3.379a2.12 2.12 0 0 1 1.5-.621H20a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h4.515a6 6 0 0 1 4.242 1.757zM3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
            <path d="M12 4c-4.623 0-8.432 1.756-8.942 6c-.066.55.39 1 .942 1h16c.552 0 1.008-.45.942-1c-.51-4.244-4.319-6-8.942-6M7.001 8H7m5.002 0" />
          </g>
        </svg>
      ),
    },
    {
      title: "Menus",
      bgColor: "bg-[#008080]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#28bdbd"
            d="m384.064 274.56l.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.19 448.19 0 0 1 955.392 768H68.544A448.19 448.19 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-128h768a384 384 0 1 0-768 0m447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68a64 64 0 0 0-64 63.936V256z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-2 absolute flex items-center justify-center flex-grow options top-0 bottom-0 left-0 right-0">
      <div className="w-full ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-1  rounded-lg mb-1"
          >
            <div className="flex items-center">
              <div
                className={`w-16 h-16 max-sm:w-10 max-sm:h-10 flex items-center justify-center rounded-full ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <span className="ml-4 text-white">{item.title}</span>
            </div>
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
