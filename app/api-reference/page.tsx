import React from "react";
import NavigationBar from "../components/Containers/NavigationBar/NavigationBar";

const Page: React.FC = () => {
  return (
    <main>
      <header>
        <NavigationBar />
      </header>
      <h1 className="pt-[80px]">API Reference</h1>
    </main>
  );
};

export default Page;
