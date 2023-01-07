import Cards from "../../components/Cards/Cards";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import { Body } from "./styled";

function HomePage() {
  const context = useContext(GlobalContext);
  const { pokelist, addToPokedex, pokedex } = context;

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
  return (
    <div>
      <Header />
      <Body> 
      <section>
        <h1> Todos Pokémons </h1>
       <div className="cards">   {filteredPokelist().map((pokemon) => (
          <Cards
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
            pokemonType={pokemon.type}
          />
        ))}
        </div>
      </section>

      </Body>
    </div>
  );
}

export default HomePage;
