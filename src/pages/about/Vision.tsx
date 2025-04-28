
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Globe, Sparkles } from "lucide-react";

const Vision = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our Vision</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Creating a world where everyone has access to the support they need to thrive and reach their full potential.
        </p>
      </div>

      <div className="space-y-8">
        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Innovation in Support</h3>
                <p className="text-gray-600">Developing new approaches to address community challenges and needs.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">Extending our reach to help communities around the world thrive.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Empowering Change</h3>
                <p className="text-gray-600">Creating lasting positive impact through education and support programs.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
  </div>
);

export default Vision;
