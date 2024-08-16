"use client";

import React, { useEffect, useState } from "react";
import Section from "./Section";

const SideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    fetch("/data/sidebar.json")
      .then((response) => response.json())
      .then((data) => setSidebar(data.sidebar))
      .catch((error) => console.error("Error fetching sidebard data:", error));
  }, []);

  return (
    <aside className="fixed left-0 top-[68px] z-10 h-[calc(100vh-68px)] w-[320px] overflow-y-auto border-r border-gray-100 bg-white p-4 font-medium">
      <div className="space-y-4 divide-y divide-gray-100">
        {sidebar.map((section, sectionIndex) => (
          <Section key={sectionIndex} section={section} />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
