import { Footer, Header } from "@/components/common";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="flex-1 overflow-auto pt-16 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
