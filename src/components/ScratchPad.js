import React, { useState } from 'react';

const ScratchPad = () => {
  const [notes, setNotes] = useState('');

  const handleChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="scratch-pad">
      <h2>Scratch Pad</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write your calculations or notes here..."
        style={{ width: '100%', height: '100%', resize: 'none' }}
      />
    </div>
  );
};

export default ScratchPad;
