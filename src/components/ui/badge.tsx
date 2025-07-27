import React from "react";

export const Badge = ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    style={{
      display: "inline-block",
      background: "#e0e7ff",
      color: "#3730a3",
      borderRadius: "999px",
      padding: "4px 12px",
      fontSize: "0.85rem",
      fontWeight: 500,
    }}
    {...props}
  >
    {children}
  </span>
); 