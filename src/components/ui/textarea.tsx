import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => (
    <textarea
      ref={ref}
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "8px 12px",
        fontSize: "1rem",
        outline: "none",
        width: "100%",
        minHeight: "80px",
      }}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea"; 