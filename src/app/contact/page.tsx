"use client"
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 relative">
      
      
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
         sent Successfully
        </div>
      )}

     
      <div className="bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-white/80 mt-1">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">

        {/* Left Info */}
        <div className="space-y-6">

          <div className="bg-white p-6 bor-15 rounded-xl shadow">
            <p className="font-semibold"><FaPhoneAlt className="text-primary-600" /> Phone</p>
            <p>+1 (800) 123-4567</p>
          </div>

          <div className="bg-white bor-15 p-6 rounded-xl shadow">
            <p className="font-semibold"><MdEmail className="text-primary-600" /> Email</p>
            <p>support@freshcart.com</p>
          </div>

          <div className="bg-white p-6 bor-15 rounded-xl shadow">
            <p className="font-semibold"><FaLocationDot className="text-primary-600" /> Location</p>
            <p>New York, USA</p>
          </div>

          <div className="bg-white p-6 bor-15 rounded-xl shadow">
            <p className="font-semibold"><CiCircleChevDown className="text-primary-600" /> Business Hours</p>
            <p>Mon - Fri: 8am - 6pm</p>
          </div>

        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-6">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="border border-gray-300 p-3 bor-15 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="border border-gray-300 p-3 bor-15 rounded-lg"
              />
            </div>

            <select title='s' className="border border-gray-300 p-3 bor-15 rounded-lg w-full">
              <option>Choose subject</option>
              <option>General</option>
              <option>Order</option>
            </select>

            <textarea
              placeholder="Your message"
              className="border border-gray-300 p-3 rounded-lg bor-15 w-full"
            />

            <button
              type="submit"
              className="bg-primary-600 text-white bor-15 px-6 py-3 rounded-lg"
            >
             Submit 
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}