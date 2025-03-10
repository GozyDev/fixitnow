import { useState } from "react";
import { ExclamationCircleIcon, CurrencyDollarIcon, MapPinIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { PropData } from "@/lib/type";

export default function StepThreeProvider({
  nextStep,
  prevStep,
  updateFormData,
  formData,
}:PropData) {
  const [errors, setError] = useState({

    rate: "",
    locations: "",
  });

  function validateAndNext() {
    const newErrors = {  locations: "", rate: "" };

    
    if (!formData.locations.length) newErrors.locations = "Location is required";
    if (!formData.rate.trim()) newErrors.rate = "Hourly rate is required";

    setError(newErrors);

    if (!Object.values(newErrors).some(err => err)) {
      nextStep();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full space-y-6 pt-[10px] shadow">
        
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-6 space-y-6">
         

          {/* Hourly Rate Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Hourly Rate
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="number"
                placeholder="50"
                value={formData.rate}
                onChange={(e) => updateFormData("rate", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.rate ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {errors.rate && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.rate && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.rate}
              </p>
            )}
          </div>

          {/* Locations Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Service Locations
              <span className="text-gray-500 ml-1">(comma separated)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MapPinIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="New York, Los Angeles, Chicago..."
                value={formData.locations}
                onChange={(e) => updateFormData("locations", e.target.value.split(","))}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.locations ? "border-red-300" : "border-gray-200"
                } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
              />
              {errors.locations && (
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.locations && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.locations}
              </p>
            )}
          </div>

          {/* Bio Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Professional Bio
              <span className="text-gray-500 ml-1">(max 250 characters)</span>
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => updateFormData("bio", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
              rows={4}
              maxLength={1700}
              placeholder="Describe your professional experience and skills..."
            />
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
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}