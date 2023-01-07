import Cards from "../../components/Cards/Cards";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { PokedexContainer } from "./styled";

function Pokedex() {
  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex } = context;

  return (
    <div>
      <Header />
      <PokedexContainer>
        <section>
          <h1> Meus pokémons</h1>
          <div className="cards">
            {pokedex.map((pokemon) => (
              <Cards
                key={pokemon.name}
                pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                removeFromPokedex={removeFromPokedex}
              />
            ))}
          </div>
        </section>
      </PokedexContainer>
    </div>
  );
}

export default Pokedex;
