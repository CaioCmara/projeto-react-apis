import styled from "styled-components";

export const Body = styled.body`
  background-color: #5e5e5e;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  height: 100%;
  h1 {
    margin-left: 50px;
    margin-bottom: 40px;
    color: white;
    font-family: "Poppins", sem serifa;
    font-size: 40px;
    font-weight: 560;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
`;
