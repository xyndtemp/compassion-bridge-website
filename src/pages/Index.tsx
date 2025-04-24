import { Heart, Users, Home, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import ImageSlideshow from "@/components/ImageSlideshow";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with animation */}
      <section className="relative bg-primary text-white py-20 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Building Bridges of Compassion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-up">
            Everyone deserves a chance to thrive. We're here to provide vital support and resources to those in need.
          </p>
          <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 animate-fade-up">
            Get Involved
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 animate-fade-in [animation-delay:200ms]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mental Health Support</h3>
              <p className="text-gray-600">
                Professional counseling services and support groups to help individuals manage their mental health.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Homelessness Support</h3>
              <p className="text-gray-600">
                Temporary housing program and essential services to help people get back on their feet.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <HandshakeIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Physical Support</h3>
              <p className="text-gray-600">
                Accessible services and advocacy for individuals with physical challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Compassion Bridge Initiative, we're driven by a simple yet profound belief: everyone deserves a chance to thrive. Our mission is to provide vital support and resources to individuals struggling with mental health issues, homelessness, and physical challenges.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a world where compassion, empathy, and understanding are the guiding principles of our society. A world where individuals can live with dignity, purpose, and hope.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <ImageSlideshow />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
              <p className="text-gray-600">People Helped Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Commitment to Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in making a difference. Together, we can create lasting change.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Volunteer Now
            </Button>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              Donate
            </Button>
          </div>
        </div>
      </section>

      <FloatingDonateButton />
      <Footer />
    </div>
  );
};

export default Index;
