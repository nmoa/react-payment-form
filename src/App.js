import "./App.css";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ja from 'date-fns/locale/ja'

import PaymentForm from "./PaymentForm"

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <PaymentForm />
    </LocalizationProvider >
  );
}

export default App;
