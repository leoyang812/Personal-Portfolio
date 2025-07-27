import React from "react";

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    style={{
      background: "#6366f1",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "background 0.2s",
    }}
    {...props}
  >
    {children}
  </button>
); 