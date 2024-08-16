import React from "react";

type Orientation = "right" | "down" | "left" | "up";

type ChevronIconProps = {
  orientation?: Orientation;
};

const ChevronIcon: React.FC<ChevronIconProps> = ({
  orientation = "right",
}: ChevronIconProps) => {
  const rotation: Record<Orientation, string> = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "rotate-270",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={`${rotation[orientation]} transition-all`}
      viewBox="0 0 14 14"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 12 4-4-4-4"
      ></path>
    </svg>
  );
};

export default ChevronIcon;
