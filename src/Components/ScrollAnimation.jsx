import React from 'react';

export const ScrollAnimation = ({ children, className = '', delay = 0, direction = 'up' }) => {
  // Map direction to AOS animation types
  const aosDirection = {
    up: 'fade-up',
    down: 'fade-down',
    left: 'fade-left',
    right: 'fade-right',
    fade: 'fade'
  };

  return (
    <div
      data-aos={aosDirection[direction] || 'fade-up'}
      data-aos-delay={delay}
      data-aos-duration="700"
      data-aos-once="true"
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
