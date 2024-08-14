import Acme from "@/app/components/Icons/Acme";
import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed z-10 flex h-[68px] w-full items-center justify-between border-b border-gray-100 bg-white/95 px-6 backdrop-blur">
      <div className="flex divide-x">
        <div className="flex items-center pr-6">
          <Acme />
          <span className="font-semibold text-black">Acme Docs</span>
        </div>
        <div className="space-x-4 pl-6">
          <NavigationItem href="/">Guides</NavigationItem>
          <NavigationItem href="/api-reference">API Reference</NavigationItem>
          <NavigationItem href="/changelog">Changelog</NavigationItem>
        </div>
      </div>
      <div>
        <button className="rounded-md border border-slate-300 px-3 py-1 text-[14px] font-semibold leading-[16px] text-black hover:border-slate-800 hover:bg-slate-800 hover:text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
