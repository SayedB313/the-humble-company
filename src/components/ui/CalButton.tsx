import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import React from "react";

interface CalButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalButton({ children, className }: CalButtonProps) {
  return (
    <a
      href="https://calendly.com/ben-thehumblecompany/30min"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
} 