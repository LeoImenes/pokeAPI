import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import LoadingScreen from "../../components/LoadingScreen";
import "./styles.css";
import logoAPI from "../../assets/Logo/pokeapipng.png";
import { useGetGenerations } from "../../hooks/useGetGenerations";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PokemonServices } from "../../services/PokemonServices";
import {
  GenerationID,
  PokeByID,
  pokemonSpecies,
} from "../../types/PokemonTypes";
import { Query_Keys } from "../../constants/QueryKeys";
import { PokeCard } from "../../components/PokeCard";

export function Home() {
  const { setValue, getValues, watch } = useForm({ values: { genNumber: 1 } });
  const { list: genList, isLoadingGen } = useGetGenerations();
  const [useGenID, setGenID] = useState<GenerationID>();
  const [getUrlList, setUrlList] = useState<string[]>();
  const [usePokemonSpecies, setPokemonSpecies] = useState<pokemonSpecies[]>();
  const [usePokemonURL, setPokemonURL] = useState<string[]>();

  const { data: typesData, isLoading: isLoadingTypes } = useQuery({
    queryFn: PokemonServices.getTypes,
    queryKey: Query_Keys.GET_TYPES,
    retry: 3,
  });

  const { data: pokeGen, isLoading: isLoadingPokemon } = useQuery<GenerationID>(
    ["get", getValues("genNumber")],
    () => {
      return PokemonServices.getGenerations(getValues("genNumber"));
    }
  );

  const { data: pokeList, isLoading: isLoadingPokemonList } = useQuery(
    ["get_Pokeomons", getUrlList],
    () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return PokemonServices.getPokeSpecies(getUrlList!);
    }
  );

  useEffect(() => {
    return setGenID(pokeGen);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeGen, watch("genNumber"), isLoadingPokemon]);

  useEffect(() => {
    return setUrlList(
      useGenID?.pokemon_species.map((item) => {
        return item.url;
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useGenID, isLoadingGen, isLoadingPokemon]);

  useEffect(() => {
    return setPokemonSpecies(
      pokeList?.map((item) => {
        return item.data;
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeList, isLoadingGen, isLoadingPokemon]);

  const sortName = usePokemonSpecies?.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const sortId = usePokemonSpecies?.sort(function (a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  console.log("name:", sortName, "id:", sortId);

  return (
    <>
      {isLoadingGen ? (
        <LoadingScreen />
      ) : (
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            height={"10vh"}
            display={"flex"}
            className="homeHeader"
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box>
              <img src={logoAPI} alt="pokeapi" width={"50%"} loading="lazy" />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignSelf={"center"}
            justifySelf={"center"}
            alignItems={"center"}
            textAlign={"center"}
            m={0.5}
          >
            <Container>
              <Typography
                variant="h6"
                m={2}
                color={"#21a"}
                fontWeight={"bold"}
                fontStyle={"oblique"}
                fontFamily={"Roboto Condensed"}
              >
                Select Gen:
              </Typography>
            </Container>
            <Container></Container>
            <Stack
              direction="row"
              sx={{
                border: "1px solid #ccc",
                boxShadow: "-3px -2px 14px 3px #ccc",
              }}
            >
              {genList?.results?.map((_item, index) => (
                <Button
                  key={index}
                  value={index + 1}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    setValue(
                      "genNumber",
                      Number((event.target as HTMLButtonElement).value)
                    );
                  }}
                  sx={{
                    padding: 0.5,
                    border: "none",
                    borderRight: "1px solid #ccc",
                    borderRadius: "0px",
                    backgroundColor: "#fff",
                    color: "#22e",
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignSelf={"center"}
            justifyContent={"center"}
            mt={1.5}
          >
            <Stack
              direction={"row"}
              display={"flex"}
              alignItems={"flex-start"}
              width={"80vw"}
              textAlign={"center"}
            >
              <Container>
                <Typography
                  variant="h6"
                  m={2}
                  color={"#21a"}
                  fontWeight={"bold"}
                  fontStyle={"oblique"}
                  fontFamily={"Roboto Condensed"}
                >
                  Main region: {useGenID?.main_region.name.toLocaleUpperCase()}
                </Typography>
              </Container>
              <Container>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel itemID="teste">Filter by type</InputLabel>
                  <Select
                    labelId="teste"
                    MenuProps={{
                      style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 250,
                        color: "#ccc",
                      },
                    }}
                    input={
                      <Input
                        sx={{
                          color: "#000",
                          textAlign: "start",
                          textTransform: "uppercase",
                        }}
                        placeholder={"Filter by type"}
                      />
                    }
                  >
                    {typesData?.results?.map((type) => (
                      <MenuItem
                        key={type.name}
                        value={type.name}
                        sx={{ textTransform: "uppercase" }}
                      >
                        {type.name.toLowerCase()}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Container>
            </Stack>
            <Grid container sx={{ overflowX: "scroll" }} overflow={"scroll"}>
              {usePokemonSpecies?.map((item) => (
                <PokeCard pokemonURL={item.id} key={item.id} />
              ))}
              ;
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}
