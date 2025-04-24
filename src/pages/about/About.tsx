import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <ul className="list-disc pl-6 space-y-4 text-lg text-primary">
        <li><Link to="/mission">Our Mission</Link></li>
        <li><Link to="/vision">Our Vision</Link></li>
        <li><Link to="/whatwedo">Our Work</Link></li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default About;
