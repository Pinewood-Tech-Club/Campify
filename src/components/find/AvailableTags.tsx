// components/AvailableTags.tsx

"use client";

import { ReactNode, useState, useEffect, useRef } from "react";

export function AvailableTags(props: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const handleMouseUp = () => {
    if (contentRef.current) {
      const selection = document.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0).cloneRange();
        const rect = range.getBoundingClientRect();
        setTooltipPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        contentEditable
        className="border border-gray-300 p-3 w-72 h-48 overflow-auto"
      >
        {props.children}
      </div>
      <div
        className="absolute bg-yellow-300 p-2 border border-black"
        style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
      >
        Tooltip
      </div>
    </div>
  );
}
