import { useState } from 'react';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import categories from './categories';

export default function BasicSelect() {
  const [category, setCategory] = useState(categories[0]);
  const [subcategory, setSubcategory] = useState(category.subcategories[0])


  const handleMainChange = (e) => {
    const selected = categories.filter(category => (category.name === e.target.value));
    setCategory(...selected);

  };
  const handleSubChange = (e) => {
    setSubcategory(e.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="category-label">項目</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            defaultValue={categories[0].name}
            label="項目"
            onChange={handleMainChange}
          >
            {categories.map((category) => (
              <MenuItem value={category.name} key={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="sub-category-label">小項目</InputLabel>
          <Select
            labelId="sub-category-label"
            id="sub-category"
            defaultValue={categories[0].subcategories[0]}
            label="小項目"
            onChange={handleSubChange}
          >
            {category.subcategories && category.subcategories.map((subcategory) => (
              <MenuItem value={subcategory} key={subcategory}>
                {subcategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
