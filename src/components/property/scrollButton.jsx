// ScrollButton.js

import React from 'react';

const ScrollButton = ({ sectionId }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <button onClick={handleClick}>Scroll to Section {sectionId}</button>
  );
};

export default ScrollButton;
