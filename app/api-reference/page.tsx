import React from "react";
import NavigationBar from "../components/Containers/NavigationBar/NavigationBar";
import SideBar from "../components/Containers/SideBar/SideBar";

const Page: React.FC = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <SideBar />
      <h1 className="pt-[80px]">API Reference</h1>
    </>
  );
};

export default Page;
