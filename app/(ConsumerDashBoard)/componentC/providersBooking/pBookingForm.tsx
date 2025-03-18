"use client";
import { useState } from "react";
import Checkbox from "./checkbox";
import { ProviderProfile } from "@/lib/type";
import { CurrencyDollarIcon, MapPinIcon, ClockIcon, DocumentTextIcon, StarIcon } from "@heroicons/react/24/outline";

export default function ProvidersBookingForm({
  provider,
}: {
  provider: ProviderProfile;
}) {
  const [bookingData, setBookingData] = useState({
    selectedServices: [] as string[],
    note: "",
    location: "",
    scheduleTime: "",
  });

  console.log(bookingData)

  const updateBookingDataField = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const updateServices = (value: string, checked: boolean) => {
    setBookingData((prev) => ({
      ...prev,
      selectedServices: checked
        ? [...prev.selectedServices, value]
        : prev.selectedServices.filter(service => service !== value)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Provider Profile Card */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-100/50 flex items-center justify-center shadow-inner">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">👤</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{provider.user.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <CurrencyDollarIcon className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-600">${provider.rate}/hr</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-purple-50/30 rounded-xl">
                <MapPinIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <p className="text-gray-600">{provider.locations.join(', ')}</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50/30 rounded-xl">
                <StarIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-600">4.9/5 (128 reviews)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Schedule Service
            </h1>
            
            <div className="space-y-8">
              {/* Service Selection */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Select Services
                </h2>
                <Checkbox 
                  services={provider.services} 
                  updataServices={updateServices} 
                  bookingData={bookingData}
                />
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <ClockIcon className="w-5 h-5 text-purple-600" />
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    name="scheduleTime"
                    value={bookingData.scheduleTime}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 transition-all"
                    onChange={(e) => updateBookingDataField(e.target.name, e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <MapPinIcon className="w-5 h-5 text-purple-600" />
                    Service Address
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={bookingData.location}
                    placeholder="Enter full address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 transition-all"
                    onChange={(e) => updateBookingDataField(e.target.name, e.target.value)}
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <DocumentTextIcon className="w-5 h-5 text-purple-600" />
                  Additional Notes
                </label>
                <textarea
                  name="note"
                  value={bookingData.note}
                  rows={4}
                  placeholder="Special instructions or service details..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  onChange={(e) => updateBookingDataField(e.target.name, e.target.value)}
                />
                <div className="text-right text-sm text-gray-500">
                  {bookingData.note.length}/500
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Confirm Booking Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}