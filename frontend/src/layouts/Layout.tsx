import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main className="min-h-[50vh] w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto mt-12 mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
