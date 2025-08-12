import React from "react";

interface TooltipComponentProps {
    text: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({ text = "" }) => {
  return (
    <div
      role="tooltip"
      className={`pointer-events-none bg-black absolute top-9 left-1/2 -translate-x-1/2 z-99 whitespace-nowrap rounded-lg text-white text-xs px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100`}
    >
      {text}
    </div>
  );
};

export default TooltipComponent;