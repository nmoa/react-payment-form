import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers';

import { NumericFormat } from 'react-number-format';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

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

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <NumericFormat
              thousandSeparator={true}
              allowNegative={false}
              decimalScale={0}
              customInput={TextField}
              margin="normal"
              fullWidth
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
            <DatePicker
              label="支払日"
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              送信
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>


  );
}
