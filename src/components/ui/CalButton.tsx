import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import React from "react";

interface CalButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalButton({ children, className }: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "vector-summit" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="vector-summit"
      data-cal-link="sayedb/vector-summit"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
} 