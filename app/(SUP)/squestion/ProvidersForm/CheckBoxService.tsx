import { useState } from "react";
import { HOME_SERVICES } from "@/lib/services";
import {
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { formDataType } from "@/lib/type";

type PropData = {
  pNext:()=>void
  prevStep:()=>void
  formData:formDataType
  ProvidersServices:(value:string,checked:boolean) =>  void
};

export default function CheckBoxService({
  pNext,
  prevStep,
  formData,
  ProvidersServices,
}:PropData) {
  const [homeService, setHomeService] = useState(HOME_SERVICES);

  const toggle = (id: string) => {
    setHomeService((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, toggle: !service.toggle } : service
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
        Select Required Services
      </h1>

      <div className="space-y-4">
        {homeService.map((serviceCategory) => (
          <fieldset
            key={serviceCategory.id}
            className="rounded-lg border border-purple-50 bg-purple-50/30 overflow-hidden "
          >
            <legend
              onClick={() => toggle(serviceCategory.id)}
              className="w-full px-[20px] py-[40px] cursor-pointer bg-purple-50/50 shadow:md hover:bg-purple-100/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg text-purple-800">
                  {serviceCategory.category}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-purple-600 transform transition-transform ${
                    serviceCategory.toggle ? "rotate-180" : ""
                  }`}
                />
              </div>
            </legend>

            {serviceCategory.toggle && (
              <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceCategory.subServices.map((subservice) => (
                  <label
                    key={subservice}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50/30 transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={`${serviceCategory.category}:${subservice}`}
                      className="h-5 w-5 bg-purple-600 rounded border-purple-300 focus:ring-purple-500"
                      onChange={(e) =>
                        ProvidersServices(e.target.value, e.target.checked)
                      }
                      checked={formData.services.includes(
                        `${serviceCategory.category}:${subservice}`
                      )}
                    />
                    <span className="text-gray-700 font-medium">
                      {subservice}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </fieldset>
        ))}
      </div>

      <div className="flex justify-between mt-8 gap-4">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 px-6 py-3 text-gray-600  hover:text-purple-600 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Previous
        </button>
        <button
          onClick={pNext}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          Continue
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
