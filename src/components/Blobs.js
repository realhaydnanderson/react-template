import React, { useState, useEffect } from 'react';

const Blobs = ({ count = 3, colors, isDarkMode }) => {
  const [blobPositions, setBlobPositions] = useState([]);

  const randomizeBlobs = () => {
    const newPositions = Array(count).fill().map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (300 - 100) + 100}px`,
    }));
    setBlobPositions(newPositions);
  };

  useEffect(() => {
    randomizeBlobs();
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {blobPositions.map((pos, index) => (
        <div 
          key={index}
          className={`absolute rounded-full filter blur-xl opacity-30 ${isDarkMode ? 'mix-blend-lighten' : 'mix-blend-multiply'} animate-blob ${colors[index % colors.length]}`}
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.size,
            height: pos.size,
            animationDelay: `${index * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Blobs;