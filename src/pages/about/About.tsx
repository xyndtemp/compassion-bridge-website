
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Users, Flag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">About Our Organization</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're dedicated to making a positive impact in our community through compassionate service and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "Our Mission",
            icon: <Flag className="w-8 h-8 text-blue-600" />,
            description: "Empowering communities through support and resources",
            link: "/mission"
          },
          {
            title: "Our Vision",
            icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
            description: "Creating lasting positive change in society",
            link: "/vision"
          },
          {
            title: "What We Do",
            icon: <Briefcase className="w-8 h-8 text-blue-600" />,
            description: "Providing vital services and community programs",
            link: "/whatwedo"
          },
          {
            title: "Our Team",
            icon: <Users className="w-8 h-8 text-blue-600" />,
            description: "Dedicated professionals working for change",
            link: "/goals"
          }
        ].map((item, index) => (
          <Link to={item.link} key={index}>
            <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">People Helped</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Community Programs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-600">Years of Service</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
