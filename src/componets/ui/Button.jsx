import React from "react";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-black hover:bg-blue-3/90 h-10 px-4 py-2"
    >
      {text}
    </a>
  );
};

export default Button;
