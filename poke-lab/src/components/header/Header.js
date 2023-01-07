import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex, goToHomePage } from "../../routes/coordinator";
import { Container, VerPokedex } from "./styled";
import pokeTittle from "../../assets/pokeTittle.svg";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div className="imagem">
              <img src={pokeTittle} alt="logo pokemon"></img>
            </div>
            <VerPokedex>
              {" "}
              <button onClick={() => goToPokedex(navigate)}>
                {" "}
                Pokédex{" "}
              </button>{" "}
            </VerPokedex>
          </Container>
        );
      case "/pokedex":
        return (
          <Container>
            <div className="voltar-pokemons">
              <a onClick={() => goToHomePage(navigate)}>
                {" "}
                <h2> Todos Pokémons </h2>{" "}
              </a>{" "}
            </div>
            <div className="imagem">
              <img src={pokeTittle} alt="logo pokemon"></img>
            </div>
          </Container>
        );
      default:
        return (
          <Container>
            {" "}
            <div className="voltar-pokemons">
              <a onClick={() => goToHomePage(navigate)}>
                {" "}
                <h2>Todos Pokémons </h2>{" "}
              </a>{" "}
            </div>
            <div className="imagem">
              <img src={pokeTittle} alt="logo pokemon"></img>
            </div>
          </Container>
        );
    }
  };
  return renderHeader();
}

export default Header;
