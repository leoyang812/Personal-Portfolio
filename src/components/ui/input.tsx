import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <input
      ref={ref}
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "8px 12px",
        fontSize: "1rem",
        outline: "none",
        width: "100%",
      }}
      {...props}
    />
  )
);
Input.displayName = "Input"; 