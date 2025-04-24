import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Vision</h1>
      <p className="text-lg text-gray-700">We envision a world where everyone has access to the support they need to thrive, regardless of their circumstances. Our vision is to create lasting change through compassion, advocacy, and community action.</p>
    </main>
    <Footer />
  </div>
);

export default Vision;
