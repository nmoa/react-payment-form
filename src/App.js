import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ja from 'date-fns/locale/ja'

import PaymentForm from "./PaymentForm"

const defaultTheme = createTheme();

function App() {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <PaymentForm />
        </LocalizationProvider >
      </ThemeProvider>
    </>
  );
}

export default App;
