
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const Mission = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our Mission</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Making a positive impact in our community through compassionate service and innovative solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Providing support with empathy and understanding to those in need.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Focused Impact</h3>
              <p className="text-gray-600">Creating meaningful change through targeted programs and initiatives.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">Building stronger communities through collaboration and support.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
  </div>
);

export default Mission;
