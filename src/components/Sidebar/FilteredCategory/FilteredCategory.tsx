import {
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
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
[]  );
  const { priceFilter, author, genre } = useAppSelector((state) => state.searchFiltersData);

  useEffect(() => {
    setRadioValue(author);
    setCheckBoxes(genre);
  }, [author, genre])

  useEffect(() => {
    const data: IBookFilters = {
      author: radioValue,
      genre: checkBoxes,
      priceFilter,
    };
    dispatch(filteredSearch(data));
  }, [radioValue, checkBoxes, priceFilter, dispatch]);

  const handleRadioGroupChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(ev.target.value);
  };

  const handleCheckboxGroupChange = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newCheckBoxes = checkBoxes!.slice();
    ev.target.checked
      ? (newCheckBoxes[Number(ev.target.id) - 1] = ev.target.value)
      : (newCheckBoxes[Number(ev.target.id) - 1] = "");

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
              value={item.value}
              control={<Checkbox id={`${item.id}`} />}
              label={item.name}
            />
          ))}
        </FormGroup>
      )}
    </FormControl>
  );
};

export default FilteredCategory;
