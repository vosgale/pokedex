import styled from "styled-components";
import IMAGES from "../assets";
export const PokemonListContainer = styled.div`
  width: 40%;
  height: 100%;
  right: 0px;
  position: absolute;
  background: rgb(0 0 0 / 61%);
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.48) -5px -2px 7px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const PokemonListHeader = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  background-image: ${`url(${IMAGES.pokedexHeader})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
`;
export const HorizontalTypesList = styled.div`
  border: thin solid red;
  width: 300px;
  height: 35px;
`;
export const SearchInputContainer = styled.div`
  display: flex;
  border: thin solid red;
  width: 300px;
  height: 35px;
`;

export const PokemonListGrid = styled.div`
  width: 100%;
  border: thin solid blue;
  overflow-x: auto;
  display: grid;
  height: 100%;
  gap: 20px;
  padding: 0 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PokemonCard = styled.div`
  border: thin solid red;
  height: 300px;
`;
