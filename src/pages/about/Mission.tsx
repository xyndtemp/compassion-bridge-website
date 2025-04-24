import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Mission = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
      <p className="text-lg text-gray-700">Our mission is to provide vital support and resources to individuals struggling with mental health issues, homelessness, and physical challenges. We strive to build bridges of hope and compassion in every community.</p>
    </main>
    <Footer />
  </div>
);

export default Mission;
