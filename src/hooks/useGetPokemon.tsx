import { useContext } from "react";
import { GetPokeContext } from "../contexts/GetPokeContex";

export const useGetPokemon = () => useContext(GetPokeContext)