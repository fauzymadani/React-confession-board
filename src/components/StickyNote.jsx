import React from "react";

const StickyNote = ({ username, time, text }) => {
  return (
    <div className="w-64 bg-orange-400 shadow-[4px_4px_0px_#999] rounded-md overflow-hidden">
      <div className="bg-orange-500 text-white text-xs px-3 py-2 flex items-center gap-2">
        <div className="w-5 h-5 bg-white rounded-full text-orange-500 flex items-center justify-center font-bold text-sm">
          👤
        </div>
        <span className="font-semibold truncate">{username}</span>
        <span className="ml-auto">{time}</span>
      </div>

      <div className="px-4 py-3 text-sm text-gray-900 break-words">
        {text}
      </div>

      <div className="px-4 py-2">
        <button className="bg-orange-300 hover:bg-orange-200 text-xs text-white w-full py-1 rounded-md flex items-center justify-center gap-1">
          💬 <span>See Comment...</span>
        </button>
      </div>
    </div>
  );
};

export default StickyNote;

