
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Home, Heart, Book } from "lucide-react";

const WhatWeDo = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-5xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">What We Do</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive support services focused on mental health, housing assistance, and community development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mental Health Support</h3>
                <p className="text-gray-600">Professional counseling services and mental health resources for individuals and families.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Individual Counseling</li>
                  <li>• Group Therapy Sessions</li>
                  <li>• Crisis Intervention</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
                <p className="text-gray-600">Temporary housing solutions and long-term housing support programs.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Emergency Shelter</li>
                  <li>• Housing Placement</li>
                  <li>• Rental Assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">Programs and services that strengthen our community bonds.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Community Events</li>
                  <li>• Support Groups</li>
                  <li>• Volunteer Programs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education & Training</h3>
                <p className="text-gray-600">Educational resources and skill development programs.</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Life Skills Workshops</li>
                  <li>• Job Training</li>
                  <li>• Financial Education</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    <Footer />
  </div>
);

export default WhatWeDo;
