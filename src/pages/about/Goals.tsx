
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Home, Brain, Heart, Book } from "lucide-react";

const Goals = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Our Goals</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Strategic objectives that guide our mission to create lasting positive change in our communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Mental Health Access</h3>
                <p className="text-gray-600">Increase access to mental health services by 50% within the next year through expanded programs and partnerships.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Housing Solutions</h3>
                <p className="text-gray-600">Provide stable housing solutions for 1,000+ individuals through our housing assistance programs.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
                <p className="text-gray-600">Build stronger communities by increasing volunteer participation by 75% across all programs.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Education Initiative</h3>
                <p className="text-gray-600">Launch comprehensive education programs reaching 5,000+ individuals annually.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300 md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">2025 Strategic Vision</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <p className="font-medium text-blue-900">Short-term Goals</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Expand mental health services</li>
                      <li>Increase volunteer base</li>
                      <li>Launch new community programs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-blue-900">Long-term Goals</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Establish new facilities</li>
                      <li>Develop sustainable funding</li>
                      <li>Create regional partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
  </div>
);

export default Goals;
