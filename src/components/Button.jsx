import React from "react";

const Button = ({ text }) => {  
  return (
    <button className="font-cambria rounded-lg bg-blue-900 my-4 px-6 py-1 text-white transition ease-in-out duration-300 hover:bg-blue-700">
      {text}
    </button>
  );
};

export default Button;
