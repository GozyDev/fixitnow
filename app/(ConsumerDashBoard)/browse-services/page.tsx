"use client";

import { useEffect, useState } from "react";
import ProviderCard from "../componentC/provider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ProviderCardProps } from "@/lib/type";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [providers, setProviders] = useState<ProviderCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userState, setUserState] = useState<{
    userId: string;
    name: string;
    email: string;
    role: string;
  }>({ email: "",name:"",role:"",userId:""});
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch("api/user");
        const data = await response.json();

        if (!response.ok) {
          router.push("/login");
        }

        if (response.ok) {
          setUserState(data.user);
        }
      } catch (error) {
        alert(error);
        router.push("/login");
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getProviders() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/providers?search=${searchQuery}`);
        const data: ProviderCardProps[] = await res.json();
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search Header */}
        <div className="flex justify-end px-3">
          <div className=" w-max flex gap-4 items-center">
            <h1 className="text-sm text-gray-600 font-light">
              {userState.email}
            </h1>
            <button className="py-2 px-5 border rounded-md bg-gray-500/10 shadow font-medium">
              Sign Out
            </button>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Find Service Providers
          </h1>
          <p className="text-gray-600 text-lg">
            Connect with skilled professionals in your area
          </p>
        </div>

        {/* Search Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search by name, service, or location..."
              className="w-full pl-14 pr-6 py-4 rounded-xl border-0 ring-1 ring-gray-200/80 focus:ring-2 focus:ring-purple-500 bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 placeholder-gray-400 text-base font-medium focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value.trim())}
            />
            {isLoading && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-4"></div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-8">
          {providers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {providers.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 mb-4 shadow-lg">
                <MagnifyingGlassIcon className="w-10 h-10 text-purple-600/80" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                No matches found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto text-lg">
                Try different search terms or check back later for new providers
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
