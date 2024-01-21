import {
  FiltersContainer,
  HorizontalTypesList,
  PokemonCard,
  PokemonListContainer,
  PokemonListGrid,
  PokemonListHeader,
  SearchInputContainer,
} from "./styles";

export const PokemonList = () => {
  return (
    <PokemonListContainer>
      <PokemonListHeader></PokemonListHeader>
      <FiltersContainer>
        <HorizontalTypesList />
        <SearchInputContainer />
      </FiltersContainer>
      <PokemonListGrid>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
        <PokemonCard></PokemonCard>
      </PokemonListGrid>
    </PokemonListContainer>
  );
};
