import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AmountInput from './AmountInput';
import PaymentDateInput from './PaymentDateInput';
import CategorySelect from './CategorySelect';
import categories from './categories';


export default function PaymentForm() {
  const [amount, setAmount] = useState();
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(categories[0]);
  const [subcategory, setSubcategory] = useState(category.subcategories[0]);

  const handleMainChange = (e) => {
    const selected = categories.filter(element => (element.name === e.target.value));
    setCategory(...selected);
  };

  const handleSubChange = (e) => {
    const selected = category.subcategories.filter(element => (element.name === e.target.value));
    setSubcategory(...selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("date", date.toLocaleDateString("ja-JP", {
      year: "numeric", month: "2-digit",
      day: "2-digit"
    }));
    formData.append("category", category.name);
    formData.append("subcategory", subcategory.name);
    fetch(
      process.env.REACT_APP_GAS_APP_URL,
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <>
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
            <AmountInput amount={amount} setAmount={setAmount} />
          </Grid>
          <Grid item xs={6}>
            <PaymentDateInput date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={6}>
            <CategorySelect
              id="category"
              labelText="項目"
              categories={categories}
              handleChange={handleMainChange}
            />
          </Grid>
          <Grid item xs={6}>
            <CategorySelect
              id="sub-category"
              labelText="小項目"
              categories={category.subcategories}
              handleChange={handleSubChange}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          送信
        </Button>
      </Box>

    </>
  );
}
