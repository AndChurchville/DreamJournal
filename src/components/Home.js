import React from "react";
import styled from "styled-components";
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <>
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

const Container = styled.div` 
display: grid;
grid-template-columns: repeat(4, auto);
column-gap: .5rem;

@media (max-width: 1024px){
  grid-template-columns: repeat(2, auto);
  column-gap: .5rem;
}

@media (max-width: 1000px){
  grid-template-columns: repeat(2, auto);
  column-gap: 1rem;
}

@media (max-width: 500px){
  grid-template-columns: repeat(1, auto);
}
`;




