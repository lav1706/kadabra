import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Announcement />
      <ToastContainer />
      <Navigation />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
