import { ProgressBarStyle } from './components/ProgressBar';
import Router from './routes';
import ThemeProvider from './theme';

function App() {
  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
