"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircleIcon,
  ArrowLeftIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { formDataType } from "@/lib/type";

type PropData = {
  formData: formDataType;
  prevStep: () => void;
};
export default function StepFour({ formData, prevStep }:PropData) {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
      } else {
        setSuccess(data.message || "Registration successful!");
        // setTimeout(() => {
        //   router.push(
        //     formData.role === "PROVIDER"
        //       ? "/provider-dashboard"
        //       : "/consumer-dashboard"
        //   );
        // }, 1500);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
          Review & Confirm
        </h1>

        {/* Status Indicators */}
        {success && (
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg animate-fade-in">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <span className="text-green-700">{success}</span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg animate-fade-in">
            <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 p-6 space-y-6">
          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem label="Name" value={formData.name} />
            <DetailItem label="Email" value={formData.email} />
            <DetailItem label="Account Type" value={formData.role} />
          </div>

          {/* Role-Specific Details */}
          {formData.role === "PROVIDER" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem
                label="Services"
                value={formData.services.join(", ")}
              />
              <DetailItem label="Hourly Rate" value={`$${formData.rate}/hr`} />
              <DetailItem
                label="Locations"
                value={formData.locations.join(", ")}
              />
              <DetailItem label="Bio" value={formData.bio} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem
                label="Interested Services"
                value={formData.interestedServices.join(", ")}
              />
              <DetailItem label="Location" value={formData.location} />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={prevStep}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-all ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Confirm & Sign Up"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-lg">
    <div className="min-w-[120px]">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="text-gray-900 break-words">{value || "-"}</p>
    </div>
  </div>
);
