import { pokeApi } from "@/api";
import { PokemonData } from "../../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonData>(
      `/pokemon/${nameOrId.toLocaleLowerCase()}`
    );

    return {
      id: data.id,
      name: data.name,
      sprites: {
        other: {
          dream_world: {
            front_default: data.sprites.other?.dream_world.front_default,
          },
        },
        front_default: data.sprites.front_default,
        back_default: data.sprites.front_default,
        front_shiny: data.sprites.front_shiny,
        back_shiny: data.sprites.back_shiny,
      },
    };
  } catch (error) {
    return null;
  }
};
