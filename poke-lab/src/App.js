import Router from "./routes/Router";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import { useState, useEffect } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

export default function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokelist, setPokelist] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = () => {
    axios
      .get(BASE_URL)
      .then((res) => setPokelist(res.data.results))
      .catch((err) => console.log(err));
  };

  const addToPokedex = (newPokemon) => {
    const pokemonOnPokedex = pokedex.find(
      (pokemon) => pokemon.id === newPokemon.id
    );
    if (!pokemonOnPokedex) {
      const newPokedex = [...pokedex, newPokemon];
      setPokedex(newPokedex);
    }
  };

  /* pokelist.forEach((pokemon) => {
    console.log(pokemon.name);
    console.log(pokemon.types?.type.name);
  }); */

  const removeFromPokedex = (capturedPokemon) => {
    const newPokedex = pokedex.filter(
      (pokemon) => pokemon.id !== capturedPokemon.id
    );
    setPokedex(newPokedex);
  };

  const context = {
    addToPokedex,
    pokedex,
    removeFromPokedex,
    pokelist
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}
