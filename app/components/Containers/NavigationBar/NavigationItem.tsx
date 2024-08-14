"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ href, children }) => {
  const pathname = usePathname();

  const applyStyle = () => {
    return `cursor-pointer rounded-md px-2 py-1 transition text-[14px] font-medium leading-[16px]
          ${
            pathname === href
              ? "text-gray-800 bg-gray-100"
              : "text-gray-600 hover:bg-gray-100"
          }
        `;
  };

  return (
    <Link href={href} className={applyStyle()}>
      {children}
    </Link>
  );
};

export default NavigationItem;
