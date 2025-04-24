import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder images */}
        <img src="/placeholder.svg" alt="Gallery 1" className="rounded-lg shadow" />
        <img src="/placeholder.svg" alt="Gallery 2" className="rounded-lg shadow" />
        <img src="/placeholder.svg" alt="Gallery 3" className="rounded-lg shadow" />
      </div>
    </main>
    <Footer />
  </div>
);

export default Gallery;
