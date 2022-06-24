import { Location, Package } from "@/types";

export interface FormState {
  name: string;
  age: number;
  location: Location;
  plan: Package;
  error?: boolean;
  step?: number;
};
