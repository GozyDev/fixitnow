"use client";
import { useState } from "react";
import Checkbox from "./checkbox";
export default function ProvidersBookingForm({ provider }: any) {
  const [BookingDetail,setBookingDetail] = useState({
    pname:"",
    services:[],
    date:"",
    location:"",
    time:"",
    note:"",
  })

  function updateState(feild:string,value:string){
    setBookingDetail(prev => (
      {...prev,[feild]:value}
    ))
  }

function sayingHello(){
  console.log("Enter your address")
}
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-8 ">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border p-8 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="pname"
                className="block text-sm font-medium text-gray-700"
              >
                Provider Name
              </label>
              <input
                type="text"
                id="pname"
                value={provider.user.name}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                disabled={true}
              />
            </div>
            {/* Service Selection */}
            <div className="bg-white/95 backdrop-blur-sm  border-white/20  space-y-6">
              {/* Service Selection - Checkboxes */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Service Type
                </label>
                <div className="flex flex-col gap-4">
                  <Checkbox services={provider.services} />
                </div>
              </div>
            </div>

            {/* Date & Time Picker */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  onChange={(e)=> updateState("date","date")}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Service Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your address"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                onChange={sayingHello}
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label
                htmlFor="shortNote"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                name="shortNote"
                id="shortNote"
                rows={4}
                placeholder="Any special instructions or details..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
