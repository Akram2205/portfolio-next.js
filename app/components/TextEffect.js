'use client'
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'full stack developer',
        1500,
        // Same substring at the start will only be typed out once, initially
        'Mern stack developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1500,
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] uppercase font-bold text-[#55e6a5]'
      repeat={Infinity}
    />
  );
};

export default TextEffect