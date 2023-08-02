import { useContext } from "react";
import { GetGenerationContext } from "../contexts/GetGenerationsContext";

export const useGetGenerations = () => useContext(GetGenerationContext);
