//import logo from './logo.svg';
import './App.css';
import MainComponent from './component/container/Main/MainComponent';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/design/theme';
import { GlobalStyles } from './shared/design/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;
