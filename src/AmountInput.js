import { NumericFormat } from "react-number-format"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function AmountInput({ amount, setAmount }) {
    return (
        <NumericFormat
            fullWidth
            thousandSeparator={false}
            allowNegative={false}
            decimalScale={0}
            customInput={TextField}
            required
            id="amount"
            label="支払い金額"
            type="text"
            variant="outlined"
            InputProps={{
                startAdornment: <InputAdornment position="start">¥</InputAdornment>,
                sx: { textAlign: "right" }
            }}
            value={amount}
            onValueChange={(values) => {
                setAmount(values.value);
            }}
        />
    )
}
