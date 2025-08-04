import React, { useState, useEffect } from "react";
import StickyNote from "./components/StickyNote";
import dummyNotes from "./data/dummyNotes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // simulate fetch
    setNotes(dummyNotes);
  }, []);

  return (
    <div className="bg-gray-100 w-screen min-h-screen p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          username={note.username}
          time={note.time}
          text={note.text}
        />
      ))}
    </div>
  );
}

export default App;

