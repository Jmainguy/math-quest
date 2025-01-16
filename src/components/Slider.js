import React, { useState } from 'react';

const Slider = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);

  const handleSliderChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;
