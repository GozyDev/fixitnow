import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import BookingButton from "../../componentC/BookingButton";
import {
  StarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

interface ProviderProfilePageProps {
  params: { id: string };
}

export default async function ProviderProfilePage({
  params,
}: ProviderProfilePageProps) {
  // Now you can use params.id directly
  const provider = await prisma.providerProfile.findUnique({
    where: { userId: params.id },
    include: { user: true },
  });

  if (!provider) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {provider.user.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {provider.bio}
              </p>
            </div>

            {/* Rating & Rate Card */}
            <div className="bg-purple-50/50 p-6 rounded-xl w-full md:w-64">
              <div className="flex items-center gap-3 mb-4">
                <StarIcon className="w-6 h-6 text-purple-600" />
                <span className="text-2xl font-semibold text-gray-900">
                  {5?.toFixed(1) || "5.0"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CurrencyDollarIcon className="w-6 h-6 text-purple-600" />
                <span className="text-2xl font-semibold text-gray-900">
                  ${provider.rate}
                  <span className="text-sm font-medium text-gray-500">/hr</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Services Offered
          </h2>
          <div className="flex flex-wrap gap-3">
            {provider.services.map((service: string) => (
              <span
                key={service}
                className="px-4 py-2 bg-purple-100/50 text-purple-700 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Location & Details */}
        <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <MapPinIcon className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Service Locations
                </h3>
                <p className="text-gray-600">{provider.locations.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-8 text-center">
          <BookingButton providerID={provider.userId} />
        </div>
      </div>
    </div>
  );
}
