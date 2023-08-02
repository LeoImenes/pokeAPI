import axios from "axios";
import {
  GenerationID,
  Generations,
  PokeByID,
  Pokemon,
  Types,
} from "./../types/PokemonTypes";

const endpoints: any = [];

for (let i = 1; i <= 151; i++) {
  endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

export class PokemonServices {
  static async getPokeSpecies(url: string[]) {
    const response = await axios.all(
      url.map((endpoint: any) => {
        try {
          return axios.get(endpoint);
        } catch (error) {
          throw new Error("Não foi possivel receber dados dos pokemons");
        }
      })
    );


    return response
  }

  static async getPoke(pokemon: string|number): Promise<PokeByID> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    return data;
  }

  static async getGenerations(generationNumber: number): Promise<GenerationID> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/generation/${generationNumber}`
    );

    return data;
  }
  static async getTypes(): Promise<Types> {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type`);

      return data;
    } catch (error) {
      throw new Error("Não foi possivel carregar os tipos");
    }
  }

  static async getAllGenerations(): Promise<Generations> {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/generation/");

      return data;
    } catch (error) {
      throw new Error("Não foi possível carregar as gerações de pokemons");
    }
  }

  static async get(): Promise<Pokemon[]> {
    const response: Pokemon[] = await axios.all(
      endpoints.map((endpoint: any) => {
        try {
          return axios.get(endpoint);
        } catch (error) {
          throw new Error("Não foi possivel receber dados dos pokemons");
        }
      })
    );
    return response;
  }
}
