import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 80px;
  justify-content: center;
  
 

  .voltar-pokemons {
   
   
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-decoration-line: underline;

    cursor: pointer;
  }

  .imagem {
    width: 40%;
    display: flex;
   
    justify-content: space-around;
  }
`;

export const VerPokedex = styled.div`
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    position: absolute;
    width: 287px;
    height: 74px;

    top: 41px;

    background: #33a4f5;
    border-radius: 8px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff;
  }
`;
