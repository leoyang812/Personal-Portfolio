import React from "react";

export const Badge = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`inline-block bg-indigo-100 text-indigo-800 rounded-full px-4 py-1 text-sm font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
); 