import Link from "next/link";
type PropData = {
  nextStep: () => void;
  updateFormData: (field: string, value:string) => void;
};
export default function StepOne({ nextStep, updateFormData }: PropData) {
  function handleRoleSelect(role: string) {
    updateFormData("role", role);
    nextStep();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          What brings you to FixItNow?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Consumer Card */}
          <button
            onClick={() => handleRoleSelect("CONSUMER")}
            className="group relative p-8 text-left rounded-2xl bg-white/95 backdrop-blur-sm shadow-sm border border-white/20 hover:border-purple-100/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                I need services
              </h2>
              <p className="text-gray-500 text-sm">
                Find qualified professionals for your home needs
              </p>
            </div>
          </button>

          {/* Provider Card */}
          <button
            onClick={() => handleRoleSelect("PROVIDER")}
            className="group relative p-8 text-left rounded-2xl bg-white/95 backdrop-blur-sm shadow-sm border border-white/20 hover:border-green-100/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                I want to provide services
              </h2>
              <p className="text-gray-500 text-sm">
                Connect with clients and grow your business
              </p>
            </div>
          </button>
        </div>

        <div>
          <Link href="/">
            <button className="shadow py-[15px] px-[30px] rounded">
              Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
