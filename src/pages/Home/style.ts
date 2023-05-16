import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;

  >h1{
    margin-bottom: 35px;
    font-weight: 500;
  }

  >h2{
    font-weight: 600;
  }
`;
