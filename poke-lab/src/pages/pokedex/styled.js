import styled from "styled-components";

export const PokedexContainer = styled.body`
  display: flex;
  flex-direction: row;
  background-color: #5e5e5e;
  width: auto;
  height: 100vh;

  h1 {
    margin-left: 50px;
    margin-bottom: 40px;
    color: white;
    font-family: "Poppins", sem serifa;
    font-size: 40px;
    font-weight: 560;
  }
  .cards {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }
`;
