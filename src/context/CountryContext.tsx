import { createContext } from "react";
import type { Country } from "../types/country";

export interface CountryContextType {
    countries: Country[];
    isLoading: boolean;
}

export default createContext<CountryContextType | null>(null);