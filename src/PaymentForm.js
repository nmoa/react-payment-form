import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import BasicSelect from './BasicSelect';


// TODO remove, this demo shouldn't need to reset the theme.



export default function PaymentForm() {
  const [date, setDate] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      amount: data.get('amount'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="sm">

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CurrencyYenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          家計費精算
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate sx={{
            mt: 4,
            alignItems: 'center'
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            marginBottom={2}
          >
            <Grid item xs={6}>
              <NumericFormat
                fullWidth
                thousandSeparator={true}
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
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                fullWidth
                label="支払い日"
                value={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </Grid>
            {/* <Grid item xs={12}> */}
            {/* </Grid> */}
          </Grid>
          <BasicSelect />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            送信
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
