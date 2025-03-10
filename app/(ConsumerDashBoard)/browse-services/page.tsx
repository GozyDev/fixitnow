"use client";

import { useEffect, useState } from "react";
import ProviderCard from "../componentC/provider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";

export default function BookingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [providers, setProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProviders() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/providers?search=${searchQuery}`);
        const data = await res.json();
        if (res.ok) setProviders(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProviders();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/20 to-white py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search Input */}
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search providers by name, service, or location..."
            className="w-full pl-12 pr-6 py-4 rounded-xl border-0 ring-1 ring-gray-200/80 focus:ring-2 focus:ring-purple-500 bg-purple-50 shadow-sm hover:shadow-md transition-all duration-300 text-black-700 placeholder-black-400/90 focus:outline-none text-sm font-medium b"
            onChange={(e) => setSearchQuery(e.target.value.trim())}
          />
          {isLoading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <Spinner
                className="w-5 h-5 text-purple-500"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </div>
          )}
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          {providers.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {providers.map((provider: any) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-50/50 mb-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-purple-600/80" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                No providers found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search terms - maybe a different service name
                or location?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
