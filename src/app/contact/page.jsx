
"use client";
import React, { useEffect, useState, useRef } from "react";


const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const form = useRef();

  const services = [
    "Branding",
    "Social Media Management",
    "Content Creation & Marketing",
    "Ad Film/Video Production",
    "SEO",
    "Website Transformation",
    "Mobile App Development & UI/UX",
    "CRM/Sales Pipeline Development",
    "Influencer Marketing",
    "IP Creation",
    "Email & SMS Marketing Automation",
    "Performance Media",
    "Growth via Media Buying",
    "Social Listening & ORM",
    "Web Design",
    "Consumer & Market Research",
    "Integrated Campaigns",
    "Others",
  ];

  // Handle service selection
  const handleServiceClick = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      if (selectedServices.length < 10) {
        setSelectedServices([...selectedServices, service]);
      }
    }
  };

  // Handle form submission with backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      organization: e.target.organization.value,
      email: e.target.email.value,
      number: e.target.number.value,
      website: e.target.website.value,
      services: selectedServices,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setSelectedServices([]); // Reset selected services
        e.target.reset(); // Reset form fields
      } else {
        const error = await response.json();
        alert(`Failed to send message: ${error.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#e5e8ea] font-mozilla flex items-start justify-center py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="form-section p-4 sm:p-6 md:p-4">
          <h2 className="md:text-5xl text-3xl font-bold mb-4 sm:mb-6">Drop Us A Message</h2>
          <p className="mb-4 md:text-lg text-base">
            We're excited to work with you soon! Please drop an email with your details at{" "}
            <a href="mailto:career@rbshstudio.com" className="text-blue-500">RBSH STUDIO</a>
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your full name"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-md font-medium text-gray-700">Your Organization's Name</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Your Organization's Name"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-md font-medium text-gray-700">Your Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="Your Number"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-md font-medium text-gray-700">Website/Social Media Link</label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Website/Social Media Link"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Services Selection */}
            <div className="md:mt-8 mt-20">
              <label className="block text-lg font-medium text-gray-700">
                Which services are you interested in? (Select up to 10)
              </label>
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-7">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  const isDisabled = !isSelected && selectedServices.length >= 10;
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServiceClick(service)}
                      disabled={isDisabled}
                      className={`px-3 py-1 rounded-full text-lg border-2 transition-colors duration-200 
                        ${isSelected ? 'bg-green-500 text-white' : 'bg-white text-black'}
                        ${isDisabled && !isSelected ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 hover:text-white'}
                        border-yellow-950`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              {selectedServices.length >= 10 && (
                <p className="mt-2 text-sm text-red-600">You can select up to 10 services.</p>
              )}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-xl font-bold hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>

        <div className="image-section grid grid-cols-1 gap-4 ml-0 sm:ml-12">
          <img src="/contactus1.png" alt="Product 1" className="w-full h-auto object-cover rounded-lg" />
          <img src="/contactus2.png" alt="Product 2" className="w-full h-auto object-cover rounded-lg" />
          <img src="/contactus3.png" alt="Product 3" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
