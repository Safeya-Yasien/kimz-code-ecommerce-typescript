import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="container mx-auto pt-36">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
