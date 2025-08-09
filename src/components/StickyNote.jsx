// src/components/StickyNote.jsx
import React, { useRef } from "react";
import Draggable from "react-draggable";

const StickyNote = ({ username, time, text }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-64 max-h-60 bg-orange shadow-[4px_4px_0px_#999] rounded-md overflow-hidden cursor-move"
      >
        {/* Header */}
        <div className="bg-yellow text-white text-xs px-3 py-2 flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full text-orange flex items-center justify-center font-bold text-sm">
            👤
          </div>
          <span className="font-semibold truncate">{username}</span>
          <span className="ml-auto">{time}</span>
        </div>

        {/* Content */}
        <div className="px-4 py-3 text-sm text-prussianblue break-words overflow-hidden">
          {text}
        </div>

        {/* Footer */}
        <div className="px-4 py-2">
          <button className="bg-bluegreen hover:bg-skyblue text-xs text-white w-full py-1 rounded-md flex items-center justify-center gap-1">
            💬 <span>See Comment...</span>
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default StickyNote;
