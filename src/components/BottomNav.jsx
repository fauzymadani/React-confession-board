// src/components/BottomNav.jsx
import React from "react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center justify-between px-6 py-2 w-60">
      {/* Home */}
      <button className="text-orange text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H4.5A.75.75 0 013.75 21V9.75z"
          />
        </svg>
      </button>

      {/* Add (floating circle) */}
      <button className="bg-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-md -mt-8 border-4 border-white">
        +
      </button>

      {/* Settings */}
      <button className="text-orange text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h1.5M3 12h1.5M12 19.5v1.5M12 3v1.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default BottomNav;
