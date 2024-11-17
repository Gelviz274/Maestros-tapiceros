"use client";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  icon: LucideIcon;
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  icon: Icon,
  children,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg transition-colors duration-300";
  const variants = {
    primary: "text-white bg-cafe hover:bg-cafeclaro",
    secondary: "text-white bg-[#8b7b72] hover:bg-[#726259]",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </button>
  );
};
