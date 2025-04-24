import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatWeDo = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">What We Do</h1>
      <p className="text-lg text-gray-700">We provide mental health support, temporary housing, and accessible services for individuals facing physical challenges. Our programs are designed to empower people and create sustainable change in our communities.</p>
    </main>
    <Footer />
  </div>
);

export default WhatWeDo;
