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
  // МОЖЕТ ПОЛОЖИТЬ СИСТЕМУ, АККУРАТНО
  const [checkBoxes, setCheckBoxes] = useState<IBookFilters["genre"] | null>(
    null
  );
  const genresFilter = new Array<number>(genres.length).fill(0);
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
    // checkBoxes.push(ev.target.value);
    // setCheckBoxes()
    genresFilter[Number(ev.target.value) - 1] === Number(ev.target.value)
      ? (genresFilter[Number(ev.target.value) - 1] = 0)
      : (genresFilter[Number(ev.target.value) - 1] = Number(ev.target.value));
    console.log("genreFilter",genresFilter);
    setCheckBoxes(genresFilter);
    console.log("chboxes",checkBoxes);
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
            />
          ))}
        </FormGroup>
      )}
    </FormControl>
  );
};

export default FilteredCategory;
