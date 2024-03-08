import { cn } from "@/utils/cn";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "text-center bg-blue font-Roboto rounded-lg px-6 py-3 text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
