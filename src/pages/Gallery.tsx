
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-6xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Our Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a look at some of the moments we've captured while making a difference in our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Community Outreach",
            description: "Working together to build stronger communities",
            image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          },
          {
            title: "Support Programs",
            description: "Providing resources and assistance",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
          },
          {
            title: "Making Progress",
            description: "Achieving goals together",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          },
          {
            title: "Building Connections",
            description: "Creating lasting relationships",
            image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
          },
          {
            title: "Volunteer Work",
            description: "Dedicated teams making a difference",
            image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          },
          {
            title: "Community Events",
            description: "Bringing people together",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
          }
        ].map((item, index) => (
          <Card key={index} className="overflow-hidden group glass-card hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Gallery;
