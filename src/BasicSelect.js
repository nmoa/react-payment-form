import { useState } from 'react';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import createTypography from '@mui/material/styles/createTypography';

const categories = [
  {
    name: '食費', subcategories: [
      '食費',
      '食料品',
      '外食',
      '嗜好品',
      '朝ご飯',
      '昼ご飯',
      '夜ご飯',
      'カフェ',
      'その他食費',
    ]
  },
  { name: '日用品', subcategories: [] },
  { name: '趣味・娯楽', subcategories: [] },
  { name: '交際費', subcategories: [] },
  { name: '交通費', subcategories: [] },
  { name: '衣服・美容', subcategories: [] },
  { name: '健康・医療', subcategories: [] },
  { name: '自動車', subcategories: [] },
  { name: '教養・教育', subcategories: [] },
  { name: '特別な支出', subcategories: [] },
  { name: '現金・カード', subcategories: [] },
  { name: '水道・光熱費', subcategories: [] },
  { name: '通信費', subcategories: [] },
  { name: '住宅', subcategories: [] },
  { name: '税・社会保障', subcategories: [] },
  { name: '保険', subcategories: [] },
  { name: 'その他', subcategories: [] },
]

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
