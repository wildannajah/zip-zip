import Home from './pages/Home';
import ThemeProvider from './theme';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
