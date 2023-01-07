import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import pokeb from "../../assets/pokeb.png";
import { CardStyle } from "./Styled";
import { pokemonType } from "../../utils/Types";
import { cores } from "../../utils/Cores";

function Cards(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [typePokemon, setTypePokemon] = useState(false);
  const [cor, setCor] = useState([])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      setTypePokemon(true);
      setCor(response.data.types[0].type.name)
    } catch (error) {
      console.log("Erro ao encontrar Pokemon!");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const types = () => {
    if (typePokemon && pokemon.types[1]) {
      return (
        <>
          <img src={pokemonType(pokemon.types[0].type.name)}></img>
          <img src={pokemonType(pokemon.types[1].type.name)}></img>
        </>
      );
    }
    return (
      <img src={pokemonType(pokemon.types && pokemon.types[0].type.name)}></img>
    );
  };

  return (
    <CardStyle color={cores(cor)}>
      <div className="inputs ">
        <div className="left">
          <span>
            {" "}
            <p>#{pokemon.id} </p>{" "}
          </span>
          <h1>
            {" "}
            {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
          </h1>
        </div>
        <div className="types-details">
          <div className="type"> {types()} </div>
          <div className="botoes">
            <a
              className="details"
              onClick={() => goToDetails(navigate, pokemon.name)}
            >
              Ver detalhes
            </a>{" "}
          </div>
        </div>
      </div>

      <div className="imagens">
        <div className="sprites">
          {" "}
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={"193px"}
            height={"193px"}
          />{" "}
        </div>
        <img className="pokebola" src={pokeb} alt="pokebola"></img>
        <div className="add-remove">
          {location.pathname === "/" ? (
            <button onClick={() => addToPokedex(pokemon)}>Capturar</button>
          ) : (
            <button onClick={() => removeFromPokedex(pokemon)}>
              Remover da Pokedex
            </button>
          )}
        </div>
      </div>
    </CardStyle>
  );
}
export default Cards;
