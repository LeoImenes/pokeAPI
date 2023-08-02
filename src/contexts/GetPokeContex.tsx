import { createContext, PropsWithChildren, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Query_Keys } from "../constants/QueryKeys";
import { PokemonServices } from "../services/PokemonServices";
import { Pokemon } from "../types/PokemonTypes";

interface PokeContextValues {
  list?: Pokemon[] ;
  isLoadingPokemon: boolean;
}

export const GetPokeContext = createContext<PokeContextValues>({
  list: [],
  isLoadingPokemon: false,
});

const useGetPoke = () => {
  const { data: pokeList, isLoading: isLoadingPokemon } = useQuery({
    queryKey: Query_Keys.GET_ALL,
    queryFn: PokemonServices.get,
    retry: 3,
  });

  const list: any = [
    { id: 0, name: "", height: 0, weight: 0, types: [], sprite: "" },
  ];

  pokeList?.map((poke: any) => {
    const typesName: any[] = [];
    poke.data.types.map((type: any) => {
      typesName.push({ type: type.type.name });
    });

    list.push({
      id: poke.data.id,
      name: poke.data.name,
      height: poke.data.height,
      weight: poke.data.weight,
      types: typesName,
      sprite: poke.data.sprites.front_default,
    });
  });

  list.shift();

  return { pokeList, isLoadingPokemon };
};

export const GetPokeProvider = ({ children }: PropsWithChildren) => {
  const value = useGetPoke();

  return (
    <GetPokeContext.Provider value={value}>{children}</GetPokeContext.Provider>
  );
};
