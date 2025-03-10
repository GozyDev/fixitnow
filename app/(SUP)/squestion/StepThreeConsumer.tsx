"use client";
import { useState } from "react";
import {
  ExclamationCircleIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { PropData } from "@/lib/type";

export default function StepThreeConsumer({
  nextStep,
  prevStep,
  updateFormData,
  formData,
}: PropData) {
  const [errors, setErrors] = useState({
    interestedServices: "",
    location: "",
  });

  function validateAndNext() {
    const newErrors = { interestedServices: "", location: "" };
    let isValid = true;

    if (!formData.interestedServices.length) {
      newErrors.interestedServices = "Please list at least one service";
      isValid = false;
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) nextStep();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full space-y-8 pt-[10px]">
        <h1 className="text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
          Tell Us What You Need
        </h1>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-6 space-y-6">
          {/* Services Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Required Services
              <span className="text-gray-500 ml-1">(comma separated)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <BriefcaseIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="interestedServices"
                type="text"
                placeholder="Plumbing, Cleaning, Electrical..."
                value={formData.interestedServices}
                onChange={(e) =>
                  updateFormData(
                    "interestedServices",
                    e.target.value.split(",")
                  )
                }
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.interestedServices
                    ? "border-red-300"
                    : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {errors.interestedServices && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.interestedServices && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.interestedServices}
              </p>
            )}
          </div>

          {/* Location Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Your Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MapPinIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="location"
                type="text"
                placeholder="City, State"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.location ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {errors.location && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.location && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.location}
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
              onClick={validateAndNext}
              className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Find Providers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
