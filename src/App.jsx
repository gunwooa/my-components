import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Container from './containers/index';

function App() {
  console.log(`App.jsx`);

  return (
    <ThemeProvider theme={theme}>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
