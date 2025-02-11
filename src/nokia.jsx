import React, { useState, useEffect } from 'react';
import "./styles.css";

const keyMappings = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: [" "]
};

const Nokia3310 = () => {
  const [dialedText, setDialedText] = useState("");
  const [pressCounts, setPressCounts] = useState({});
  const [currentKey, setCurrentKey] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleButtonClick = (num) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setPressCounts((prev) => {
      const newCount = num === currentKey ? (prev[num] || 0) + 1 : 1;
      const maxIndex = keyMappings[num] ? keyMappings[num].length : 0;
      return { ...prev, [num]: newCount % (maxIndex + 1) };
    });

    setCurrentKey(num);

    setDialedText((prev) => {
      const count = num === currentKey ? (pressCounts[num] || 0) + 1 : 1;
      const chars = keyMappings[num];
      if (chars && chars.length > 0) {
        return prev.slice(0, -1) + chars[(count - 1) % chars.length];
      }
      return prev + num;
    });

    const newTimeoutId = setTimeout(() => {
      setCurrentKey(null);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="nokia-container">
      <div className="nokia-phone">
        <div className="screen">{dialedText || "Nokia Dialpad"}</div>
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '_', 0, '#'].map((num) => (
            <button key={num} onClick={() => handleButtonClick(num)}>{num}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nokia3310;
