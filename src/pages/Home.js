import React from "react";
import { Sidebar } from "../components/sidebar";

const Home = () => {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex justify-center items-center py-[19px] overflow-hidden">
      <div className="container min-h-screen flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
