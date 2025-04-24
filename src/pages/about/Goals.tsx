import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Goals = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Goals</h1>
      <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
        <li>Increase access to mental health services</li>
        <li>Reduce homelessness in our communities</li>
        <li>Promote accessibility and inclusion for all</li>
        <li>Foster a culture of compassion and support</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default Goals;
