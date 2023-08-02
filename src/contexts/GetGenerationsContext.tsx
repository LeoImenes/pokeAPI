import { useQuery } from "@tanstack/react-query";
import { Generations } from "../types/PokemonTypes";
import { createContext, PropsWithChildren, useEffect } from "react";
import { Query_Keys } from "../constants/QueryKeys";
import { PokemonServices } from "../services/PokemonServices";

interface GenerationContextValues {
  list?: Generations;
  isLoadingGen: boolean;
}

export const GetGenerationContext = createContext<GenerationContextValues>({
  list: undefined,
  isLoadingGen: false,
});

const useGetGenerations = () => {
  let list;
  const { data: genList, isLoading: isLoadingGen } = useQuery({
    queryKey: Query_Keys.GET_ALL_GEN,
    queryFn: PokemonServices.getAllGenerations,
    retry: 3,
    refetchOnWindowFocus: false,
    onError: (err) => {
      throw new Error(`Error fetching generations: ${err}`);
    },
  });

  if (genList !== undefined) {
    list = genList;
  }

  return { list, isLoadingGen };
};

export const GetGenProvider = ({ children }: PropsWithChildren) => {
  const value = useGetGenerations();

  return (
    <GetGenerationContext.Provider value={value}>
      {children}
    </GetGenerationContext.Provider>
  );
};
