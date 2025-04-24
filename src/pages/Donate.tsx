import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const Donate: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FF]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-8">
          <h1 className="text-3xl font-bold text-center text-[#003366] mb-6">Donate to Compassion Bridge</h1>
          {submitted ? (
            <div className="text-center">
              <p className="text-green-600 text-lg font-semibold mb-4">Thank you for your generosity!</p>
              <p>We appreciate your support in helping us build a more compassionate world.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (USD)</label>
                <input
                  type="number"
                  name="amount"
                  min="1"
                  required
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0056A6]"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0056A6]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0056A6]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#0056A6]"
                  placeholder="A note of encouragement or support"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="flex gap-4">
                  <span className="inline-flex items-center px-3 py-2 bg-gray-100 rounded border border-gray-200 text-gray-700">Card</span>
                  <span className="inline-flex items-center px-3 py-2 bg-gray-100 rounded border border-gray-200 text-gray-700">PayPal</span>
                  <span className="inline-flex items-center px-3 py-2 bg-gray-100 rounded border border-gray-200 text-gray-700">Bank Transfer</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">(Demo only – payment not processed)</p>
              </div>
              <Button type="submit" className="w-full bg-[#0056A6] text-white font-bold py-2 rounded hover:bg-[#003366]">Donate</Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
