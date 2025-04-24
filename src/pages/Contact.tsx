import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-lg mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded border border-gray-300" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-lg mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded border border-gray-300" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-lg mb-2">Message</label>
          <textarea className="w-full p-3 rounded border border-gray-300" rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark">Send Message</button>
      </form>
    </main>
    <Footer />
  </div>
);

export default Contact;
