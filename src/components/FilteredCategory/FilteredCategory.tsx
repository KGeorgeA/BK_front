import {
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

const FilteredCategory = (props: { filter: string }) => {
  const { authors, genres } = useAppSelector(
    (state) => state.categoryFilterData
  );
  const [radioValue, setRadioValue] = useState<string>(""); // выводит пустую строку, а потом нормальное значение
  const [checkBoxes, setCheckBoxes] = useState<string[]>([]);

  const handleRadioGroupChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(ev.target.value);
  };

  const handleCheckboxGroupChange = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    const r = checkBoxes.push(ev.target.value)
    setCheckBoxes()
  };

  return (
    <FormControl>
      {props.filter === "author" ? (
        <RadioGroup value={radioValue} onChange={handleRadioGroupChange}>
          {authors.map((item: any) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.fullname}
            />
          ))}
        </RadioGroup>
      ) : (
        <FormGroup onChange={handleCheckboxGroupChange}>
          {genres.map((item: any) => (
            <FormControlLabel
              key={item.id}
              value={item.value}
              control={<Checkbox />}
              label={item.name}
            />
          ))}
        </FormGroup>
      )}
    </FormControl>
  );
};

export default FilteredCategory;
