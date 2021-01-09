import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/buttons/button';

const Component = styled.div`
  ${({ theme: { colors, fontSize, screenSize } }) => css`
    /* display: flex;
    flex-direction: column; */

    .header {
      padding-left: 1em;
    }
  `}
`;

const HomePage = () => {
  console.log(`HomePage.jsx`);

  return (
    <Component>
      <Button color="indigoA200" size="l" onClick={() => console.log(`ddd`)}>
        버튼1
      </Button>
    </Component>
  );
};

export default HomePage;
