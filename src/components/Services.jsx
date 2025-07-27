import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "I build responsive and high-quality websites using HTML, CSS, JavaScript, Tailwind CSS and React.",
  },
  {
    title: "Landing Pages",
    description:
      "I design and develop custom landing pages that help convert visitors to users or customers.",
  },
  {
    title: "Website Redesign",
    description:
      "I transform old or outdated websites into beautiful, modern designs.",
  },
  {
    title: "Performance Optimization",
    description:
      "I improve website loading speed, responsiveness, and SEO-friendliness.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-red-950 text-white py-20 px-8 md:px-20">
      <div className="flex items-center justify-center md:justify-start gap-3">
        <span className="w-10 h-0.5 bg-white"></span>
        <p className="text-white font-mono text-sm relative">Skills</p>
      </div>
      <h2 className="text-4xl font-bold mb-12 mt-6 text-white text-center md:text-left">
        Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-red-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-yellow-500">
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
