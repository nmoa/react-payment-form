import { DatePicker } from "@mui/x-date-pickers"

export default function PaymentDateInput({ date, setDate }) {
    return (
        <DatePicker
            label="支払い日"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            slotProps={{ textField: { fullWidth: true } }}
        />
    )
}
