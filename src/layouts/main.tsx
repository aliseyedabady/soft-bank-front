import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <div className="xl:mr-[250px] mr-0">
        <Header />
        <div className="bg-white-200 h-[calc(100vh-105px)] px-10 pt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
