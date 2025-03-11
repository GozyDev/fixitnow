export type formDataType = {
  role: string;
  name: string;
  password: string;
  email: string;
  services: string[]; // Provider only
  rate: string;
  locations: string[]; // Provider only
  bio: string; // Provider only
  interestedServices: string[]; // Consumer only
  location: string; // Consumer only
};

export type PropData = {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (field: string, value: any) => void;
  formData: formDataType;
};

export interface ProviderCardProps {
    userId: string;
    id: string;
    services: string[];
    rate: number;
    locations: string[];
    rating: number;
    bio: string;
    name: string;
}
