import { Footer, Header } from "@/components/common";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto pt-16">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default MainLayout;
