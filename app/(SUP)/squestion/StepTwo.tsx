"use client";
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { PropData } from "@/lib/type";

export default function StepTwo({
  nextStep,
  prevStep,
  updateFormData,
  formData,
}: PropData) {
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  function validateBeforeNext() {
    const newError = {
      name: "",
      email: "",
      password: "",
    };

    if (!formData.name.trim()) {
      newError.name = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      newError.email = "Please enter a valid email address";
    }
    if (!formData.password.trim()) {
      newError.password = "Password must be at least 6 characters";
    }

    setError(newError);

    if (!Object.values(newError).some((err) => err)) {
      nextStep();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full space-y-8  pt-[10px]">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-6 space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Joe Smith"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  error.name ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {error.name && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {error.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {error.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  error.email ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {error.email && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {error.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {error.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="pass"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="pass"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  error.password ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {error.password && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {error.password && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {error.password}
              </p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={prevStep}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
            >
              Back
            </button>
            <button
              onClick={validateBeforeNext}
              className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
