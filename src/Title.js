import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';

export default function Title() {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <CurrencyYenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        家計費精算
      </Typography>
    </>
  )
}
