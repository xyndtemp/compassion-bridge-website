
import React, { useState } from "react";
import ImageSlideshow from "../components/ImageSlideshow";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import FloatingDonateButton from "../components/FloatingDonateButton";
import ScanToPay from "../components/ScanToPay";

const Index = () => {
  const [showDonateQR, setShowDonateQR] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Bridges of Hope
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg">
                Join us in our mission to provide vital support and resources to
                those struggling with mental health issues, homelessness, and
                physical challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-medium"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                  onClick={() => setShowDonateQR(true)}
                >
                  Scan to Donate
                </Button>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="People helping each other"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Quarter circle slideshow positioned at bottom left */}
        <div className="absolute bottom-0 left-0 overflow-hidden w-64 h-64 md:w-80 md:h-80">
          <div className="absolute bottom-0 left-0 w-[200%] h-[200%] bg-blue-600 rounded-full transform translate-x-[-25%] translate-y-[25%]">
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-lg">
              <ImageSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Summary Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mental Health Support</h3>
                  <p className="text-gray-600">
                    Providing counseling and resources to those struggling with mental health issues.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Homelessness Initiatives</h3>
                  <p className="text-gray-600">
                    Creating sustainable solutions for individuals experiencing homelessness.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Disability Support</h3>
                  <p className="text-gray-600">
                    Empowering individuals with disabilities through accessibility and inclusion programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Donate Button */}
      <FloatingDonateButton />
      
      {/* Scan to Pay Modal */}
      {showDonateQR && <ScanToPay onClose={() => setShowDonateQR(false)} />}
    </div>
  );
};

export default Index;
