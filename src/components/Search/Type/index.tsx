import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect } from "react";
import { pokeTypes } from "../../../constants/pokeTypes";

const types = pokeTypes;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  setPokemonType: React.Dispatch<React.SetStateAction<string[]>>;
  pokemonType: string[];
}

const SearchType = ({ setPokemonType, pokemonType }: Props) => {
  const handleChange = (event: SelectChangeEvent<typeof pokemonType>) => {
    const {
      target: { value },
    } = event;
  };

  useEffect(() => {pokemonType}, [pokemonType]);

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Filter by type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={pokemonType}
          input={
            <OutlinedInput
            sx={{':focus-within':{
              backgroundColor: "#ddd"
            }}}
              label="Filter by type"
              
            />
          }
          MenuProps={MenuProps}
          onChange={handleChange}
        >
          {types.map((type) => (
            <MenuItem
              key={type}
              value={type}
              onClick={() => {
                setPokemonType((previousType) =>
                  type !== "all" ? [type] : []
                );
              }}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SearchType;
