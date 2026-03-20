import React from "react";

function Signup() {
  return (
    // Outer wrapper to center the card on the screen with a light background
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      
      {/* The Signup Card - slightly wider than login for the extra fields */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <img 
            src="/image.png" 
            alt="Logo" 
            className="w-16 h-16 object-cover rounded-full bg-gray-100" 
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Create an account
          </h1>
          <p className="text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>

        {/* Form Inputs */}
        <form className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
              Log in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;