import {
  FiltersContainer,
  HorizontalTypesList,
  PokemonCard,
  PokemonListContainer,
  PokemonListGrid,
  PokemonListHeader,
  SearchInputContainer,
} from "./styles";
import { useEffect } from "react";
import { usePokemonListController } from "./usePokemonListController";

export const PokemonList = () => {
  const { getPokemonList, pokemonList, getPokemonImage } =
    usePokemonListController();

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <PokemonListContainer>
      <PokemonListHeader></PokemonListHeader>
      <FiltersContainer>
        <HorizontalTypesList />
        <SearchInputContainer />
      </FiltersContainer>
      <PokemonListGrid>
        {pokemonList.map((pokemon) => (
          <PokemonCard>
            <p>{pokemon.name}</p>
            <img src={getPokemonImage(pokemon.id) || ""} />
          </PokemonCard>
        ))}
      </PokemonListGrid>
    </PokemonListContainer>
  );
};
