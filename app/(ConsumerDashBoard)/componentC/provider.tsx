import { useRouter } from "next/navigation";
import { StarIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { ProviderCardProps } from "@/lib/type";

export default function ProviderCard({
  provider,
}: {
  provider: ProviderCardProps;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/browse-services/${provider.userId}`);
  };

  return (
    <div
      className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50/70 hover:bg-white transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-0.5 border border-gray-100/80 hover:border-purple-100/90 cursor-pointer"
      onClick={handleClick}
    >
      {/* Gradient Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-purple-100/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative flex gap-4">
        {/* Left Column - Image Placeholder */}
        <div className="flex-shrink-0 w-24 h-24">
          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
            <UserCircleIcon className="w-12 h-12 text-gray-400 group-hover:text-purple-500 transition-colors" />
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {provider.name}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{provider.locations.join(", ")}</span>
                </div>
              </div>
              
              {/* Rating & Rate */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-purple-500/10 px-3 py-1 rounded-full">
                  <StarIcon className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">
                    {provider.rating}
                  </span>
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ${provider.rate}
                  <span className="text-sm font-medium text-gray-400">/hr</span>
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap items-center gap-2">
              {provider.services.map((service) => (
                <span 
                  key={service} 
                  className="px-3 py-1.5 bg-purple-100/50 text-purple-700 text-sm rounded-full font-medium"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {provider.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Action Indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-purple-600/10 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}