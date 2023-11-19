import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function CategorySelect({ id, labelText, categories, handleChange }) {
  const labelId = id + "-label";
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{labelText}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        label={labelText}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem value={category.name} key={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
