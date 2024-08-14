import React from "react";
import NavigationBar from "../components/Containers/NavigationBar/NavigationBar";

const Page: React.FC = () => {
  return (
    <main>
      <header>
        <NavigationBar />
      </header>
      <div className="flex">Hello World!</div>
    </main>
  );
};

export default Page;
