import React from "react";

// A simple Card container with border, shadow, and padding
export const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      border: "1px solid #eee",
      ...props.style
    }}
    {...props}
  >
    {children}
  </div>
);

// A content wrapper for inside the Card (optional, for extra spacing or structure)
export const CardContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    {children}
  </div>
); 