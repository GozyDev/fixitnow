import { useState } from "react";

export default function Checkbox({services}:{services:string[]}) {
  const [service] = useState<string[]>(services);
  return (
    <>
      {service.map((list:string) => (
         <label key={list} className="flex items-center space-x-2 cursor-pointer">
         <input
           type="checkbox"
           name={list}
           value={list}
           className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
      
         />
         <span className="text-gray-700">{list}</span>
       </label>
      ))}
    </>
  );
}
