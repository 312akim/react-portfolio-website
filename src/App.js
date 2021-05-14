//import logo from './logo.svg';
import './App.css';
import MainComponent from './component/container/Main/MainComponent';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/design/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;
