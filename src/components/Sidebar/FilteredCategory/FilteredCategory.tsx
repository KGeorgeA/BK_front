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
import { useDispatch } from "react-redux";
import { filteredSearch } from "../../../redux/user/userFilters/userFiltersSlice";
import { IBookFilters } from "../../../types/book/book.types";
import { useAppSelector } from "../../../utils/hooks/reduxHooks";

const FilteredCategory = (props: { filter: string }) => {
  const dispatch = useDispatch();
  const { authors, genres } = useAppSelector(
    (state) => state.categoryFilterData
  );
  const [radioValue, setRadioValue] = useState<IBookFilters["author"] | null>(
    null
  );
  const [checkBoxes, setCheckBoxes] = useState<IBookFilters["genre"]>(
    Array<boolean>(genres.length).fill(false)
  );
  const { price } = useAppSelector((state) => state.searchFiltersData);

  useEffect(() => {
    const data: IBookFilters = {
      author: radioValue,
      genre: checkBoxes,
      price,
    };
    dispatch(filteredSearch(data));
  }, [radioValue, checkBoxes]);

  const handleRadioGroupChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(ev.target.value);
  };

  const handleCheckboxGroupChange = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCheckBoxes = checkBoxes!.slice();
    newCheckBoxes![Number(ev.target.value) - 1] = !!ev.target.checked;
    setCheckBoxes(newCheckBoxes);
  };

  return (
    <FormControl>
      {props.filter === "author" ? (
        <RadioGroup value={radioValue} onChange={handleRadioGroupChange}>
          {authors.map((item) => (
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
          {genres.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Checkbox />}
              label={item.name}
              checked={checkBoxes![Number(item.id) - 1]}
            />
          ))}
        </FormGroup>
      )}
    </FormControl>
  );
};

export default FilteredCategory;
