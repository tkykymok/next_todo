import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type = "button", onClick, children }) => {
  return (
    <button
      type={type}
      className="bg-red-500 text-white  rounded-md px-3 py-1 text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
