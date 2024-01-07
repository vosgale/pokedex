import { ThemeProvider } from "styled-components";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonList } from "./PokemonList";
import GlobalStyles from "../styles/global-styles";
import defaultTheme from "../styles/themes/theme";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <PokemonDetails />
      <PokemonList />
    </ThemeProvider>
  );
}

export default App;
