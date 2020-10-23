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
`;




