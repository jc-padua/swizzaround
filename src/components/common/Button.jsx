import React from 'react';

function Button({ buttonLabel, classes, isFilled = false }) {
  const buttonColorStyle = isFilled
    ? 'bg-customBlue-1'
    : 'border-customBlue-2 bg-customBlue-1/10';
  return (
    <button className={`border-2 ${buttonColorStyle} rounded-lg py-2 px-4`}>
      <p className={`${isFilled ? 'text-white' : 'text-black'}`}>
        {buttonLabel}
      </p>
    </button>
  );
}

export default Button;
