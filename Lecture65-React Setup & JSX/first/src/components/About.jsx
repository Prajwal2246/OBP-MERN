import React from "react";

function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        We are a team focused on building modern, fast, and scalable web
        applications using the latest frontend technologies. Our goal is to
        create clean user experiences that are easy to use and easy to
        maintain.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">🚀 Performance</h3>
          <p className="text-sm text-gray-500 mt-2">
            Optimized code and best practices for fast-loading apps.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">🎨 Design</h3>
          <p className="text-sm text-gray-500 mt-2">
            Simple, clean, and user-friendly interfaces.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">🛠 Scalability</h3>
          <p className="text-sm text-gray-500 mt-2">
            Built to grow as your product and users grow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
