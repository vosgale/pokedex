import { Pokemon } from "pokenode-ts";
import { api } from "../services/api";
import { useState } from "react";

export function usePokemonListController() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const getPokemonList = async () => {
    try {
      const { results } = await api.listPokemons(0, 10);
      const promises = results.map(
        async (pokemon: { name: string }) =>
          await api.getPokemonByName(pokemon.name)
      );

      const pokemons = await Promise.all(promises);
      setPokemonList(pokemons);
    } catch (error) {
      console.error(error);
    }
  };
  const getPokemonImage = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  };

  return { getPokemonList, pokemonList, getPokemonImage };
}
