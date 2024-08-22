import "./App.css";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
