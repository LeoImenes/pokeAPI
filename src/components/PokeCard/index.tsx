import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typeColor } from "../../constants/pokeTypeColor";
import { PokeByID } from "../../types/PokemonTypes";
import { useState, useEffect } from "react";
import { PokemonServices } from "../../services/PokemonServices";
import { useQuery } from "@tanstack/react-query";

interface Props {
  pokemonURL: string | number;
}
export const PokeCard = ({ pokemonURL }: Props) => {
  const [pokemon, setPokemon] = useState<PokeByID>();
  const { data: pokemonData, isLoading: isLoadingPokemonData } =
    useQuery<PokeByID>(["get_by_name", pokemonURL], () => {
      return PokemonServices.getPoke(pokemonURL);
    });

  useEffect(() => {
    if (!isLoadingPokemonData) return setPokemon(pokemonData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, isLoadingPokemonData]);

  // const backgroundColor =
  //   types.length !== 1
  //     ? `linear-gradient(145deg,${typeColor(pokemon?.types.)} 10%, ${typeColor(
  //         types[1].type
  //       )} 100%)`
  //     : typeColor(types[0].type);

  console.log(pokemon?.types.length);

  return (
    <>
      <Grid
        item
        sm={4}
        sx={{
          // background: `${backgroundColor}`,
          backdropFilter: "blur(5px)",
          flexDirection: "column",
          margin: 2,
          padding: 2.5,
          textAlign: "center",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        <Typography>
          {pokemon?.name} + {pokemon?.id}
        </Typography>
      </Grid>
    </>
  );
};
