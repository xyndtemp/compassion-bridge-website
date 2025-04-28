
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            content: "(555) 123-4567",
            subtitle: "Mon-Fri from 8am to 6pm"
          },
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            content: "contact@organization.com",
            subtitle: "We'll respond as soon as possible"
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Office",
            content: "123 Community St",
            subtitle: "San Francisco, CA 94105"
          }
        ].map((item, index) => (
          <Card key={index} className="p-6 text-center glass-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-blue-600 font-medium mb-1">{item.content}</p>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </Card>
        ))}
      </div>

      <Card className="max-w-3xl mx-auto glass-card">
        <form className="p-8 space-y-6">
          <div>
            <label className="block text-lg mb-2 text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all bg-white/50 backdrop-blur-sm" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all bg-white/50 backdrop-blur-sm" 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block text-lg mb-2 text-gray-700 font-medium">Message</label>
            <textarea 
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all bg-white/50 backdrop-blur-sm" 
              rows={5} 
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300">
            Send Message
          </Button>
        </form>
      </Card>
    </main>
    <Footer />
  </div>
);

export default Contact;
