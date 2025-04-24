import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
        <Navbar />
      <div className="text-center pt-10 h-[50vh]">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-700">The page you are looking for does not exist.</p>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
