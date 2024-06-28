import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Counter = ({ endValue }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [count, setCount] = useState(0);

  const props = useSpring({
    number: inView ? endValue : 0,
    from: { number: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <div ref={ref}>
      <animated.div>
        {props.number.to(n => n.toFixed(0))}
      </animated.div>
    </div>
  );
};

export default Counter;
