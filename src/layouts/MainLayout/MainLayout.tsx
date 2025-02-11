import { Outlet } from "react-router";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
