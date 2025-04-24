import { Heart, Users, Home, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import ImageSlideshow from "@/components/ImageSlideshow";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FF]">
      <Navbar showLogo={false} />

      {/* HERO SECTION */}
      <section className="relative w-full bg-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 py-16 items-center relative">
          {/* Arc BG */}
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-50 rounded-bl-[200px] -z-10" />
          {/* Left: Animated Logo */}
          <div className="flex flex-col items-center gap-6 z-10 mb-8 md:mb-0 md:mr-8">
            <Logo />
          </div>
          {/* Right: Headline */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#003366]">Building Bridges of Compassion</h1>
            <p className="text-lg text-muted-foreground max-w-xl">Everyone deserves a chance to thrive. Together, we provide support, resources, and hope to individuals facing mental health challenges, homelessness, and physical disabilities.</p>
            <Button className="w-fit bg-[#0056A6] hover:bg-[#003366] text-white font-bold">Join Our Mission</Button>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">At Compassion Bridge Initiative, we're driven by a simple yet profound belief: everyone deserves a chance to thrive. Our mission is to provide vital support and resources to individuals struggling with mental health issues, homelessness, and physical challenges. We strive to create a safety net that catches those in need and empowers them to rebuild their lives.</p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">We envision a world where compassion, empathy, and understanding are the guiding principles of our society. A world where individuals can live with dignity, purpose, and hope. We're not just dreaming of a better future – we're working tirelessly to make it a reality.</p>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="bg-[#F5F9FF] py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="font-bold text-xl mb-2 text-[#0056A6]">Mental Health Support</h3>
              <p className="text-gray-700">We provide access to counseling services, support groups, and resources to help individuals manage their mental health. Our team of trained professionals works with clients to develop coping strategies, build resilience, and improve their overall well-being.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="font-bold text-xl mb-2 text-[#0056A6]">Homelessness Support</h3>
              <p className="text-gray-700">Our temporary housing program offers a safe and supportive environment for individuals in need. We also provide essential services like food, clothing, and hygiene facilities to help people get back on their feet.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="font-bold text-xl mb-2 text-[#0056A6]">Support for Physically Challenged Individuals</h3>
              <p className="text-gray-700">We believe that everyone deserves equal access to opportunities and resources. Our team works with individuals with physical disabilities to provide accessible services, advocacy, and support, empowering them to live independently and participate fully in their communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-[#0056A6]">Community Outreach</h3>
              <p className="text-gray-700">We build relationships with local communities, organizations, and stakeholders to identify needs and develop targeted solutions. Our team engages with community members, listens to their stories, and works collaboratively to create meaningful change.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-[#0056A6]">Collaboration</h3>
              <p className="text-gray-700">We partner with other organizations, businesses, and government agencies to amplify our impact and leverage resources. By working together, we can achieve far more than we could alone.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-[#0056A6]">Empowerment</h3>
              <p className="text-gray-700">We believe in empowering individuals to take control of their lives and make informed decisions about their well-being. Our team provides support, guidance, and resources to help clients build confidence, develop skills, and achieve their goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR GOALS SECTION */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Our Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Provide Essential Services</h3>
              <p>Deliver high-quality services and resources that meet the basic human needs of individuals in our community. We're committed to providing support that's tailored to the unique needs of each client.</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Promote Inclusivity</h3>
              <p>Foster a culture of inclusivity and acceptance, where individuals with physical disabilities, mental health issues, or homelessness can live with dignity and purpose. We believe that everyone deserves to be treated with respect and compassion.</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">Build Resilience</h3>
              <p>Support individuals in developing the skills and resilience they need to overcome challenges and achieve their goals. We're dedicated to helping people build strong foundations for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#FFD600] py-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Join Us in Our Mission</h2>
          <p className="text-lg text-[#003366] mb-6">By working together, we can make a real difference in the lives of individuals and communities. Join us in our mission to create a more compassionate world – one person at a time.</p>
          <Button className="bg-[#0056A6] hover:bg-[#003366] text-white font-bold">Get Involved</Button>
        </div>
      </section>

      {/* ABOUT/IMPACT SECTION */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">COMPASSION BRIDGE IS A NETWORK FOR COMMUNITY ACTION</h2>
            <p className="mb-6">We bring people and resources together to solve problems too big for any of us to solve alone.</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">GET TO KNOW MORE</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <span className="text-yellow-400 text-5xl font-bold">36</span>
              <p className="text-sm">communities served</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 text-5xl font-bold">48K</span>
              <p className="text-sm">lives changed annually</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 text-5xl font-bold">1,100+</span>
              <p className="text-sm">volunteers engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">COMPASSION BRIDGE NEWS</h2>
            <Button variant="link" className="flex items-center gap-1 text-blue-900">MORE NEWS STORIES</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                <img src="/news-placeholder.jpg" alt="News image" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Impact Stories</p>
                <h3 className="font-bold text-lg mt-1">Healing Through Story Time</h3>
              </div>
            </Card>
            <Card>
              <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                <img src="/news-placeholder.jpg" alt="News image" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">In the News</p>
                <h3 className="font-bold text-lg mt-1">CEO Survey: Essential insights into how nonprofits and funders view nonprofit impact priorities</h3>
              </div>
            </Card>
            <Card>
              <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                <img src="/news-placeholder.jpg" alt="News image" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Impact Stories</p>
                <h3 className="font-bold text-lg mt-1">Helping Kids Build Resilience</h3>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO SECTION */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">WHAT YOU CAN DO</h2>
            <Button variant="link" className="flex items-center gap-1 text-blue-900">MORE YOU CAN DO</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-900 text-white">
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">DONATE NOW</h3>
                <p>Your gift helps fund programs that provide support to those who need it most.</p>
              </div>
              <div className="p-4">
                <Button variant="ghost" className="text-white border border-white">Learn More</Button>
              </div>
            </Card>
            <Card className="bg-blue-800 text-white">
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">VOLUNTEER LOCALLY</h3>
                <p>People who volunteer feel happier and healthier. Connect with us to find opportunities.</p>
              </div>
              <div className="p-4">
                <Button variant="ghost" className="text-white border border-white">Learn More</Button>
              </div>
            </Card>
            <Card className="bg-blue-700 text-white">
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">SHARE YOUR VOICE</h3>
                <p>Be an advocate for policy changes that will improve lives and strengthen communities.</p>
              </div>
              <div className="p-4">
                <Button variant="ghost" className="text-white border border-white">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* UNITING FOR ACTION SECTION */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-auto">
            <img src="/action-placeholder.jpg" alt="Community members" className="object-cover w-full h-full rounded-2xl" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold mb-2">COMMUNITY MATTERS</p>
            <h2 className="text-3xl font-bold mb-4">WE BELIEVE IN THE POWER OF COMMUNITY</h2>
            <p className="mb-6">That's why Compassion Bridge works with our neighbors to strengthen local communities. Together, we're building a world where every person has the opportunity to thrive.</p>
            <Button variant="outline" className="w-fit border-white text-white hover:bg-white hover:text-red-600">LEARN MORE ABOUT US</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
