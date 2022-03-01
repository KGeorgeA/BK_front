import React, { useEffect } from "react";

import { Slider } from "@mui/material";
import { PriceInput } from "./PriceSlider.styles";
import { useDispatch } from "react-redux";
import { IBookFilters } from "../../../types/book/book.types";
import { filteredSearch } from "../../../redux/user/userFilters/userFiltersSlice";
import { useAppSelector } from "../../../utils/hooks/reduxHooks";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const { price } = useAppSelector((state) => state.bookData);
  const { author, genre } = useAppSelector((state) => state.searchFiltersData);
  const [value, setValue] = React.useState<Array<number>>([0, 1000]);

  useEffect(() => {
    const minPrice = price?.minPrice || 0;
    const maxPrice = price?.maxPrice || 1000;
    setValue([minPrice, maxPrice]);
  }, []);

  useEffect(() => {
    const data: IBookFilters = {
      author,
      genre,
      price: {
        minPrice: value[0],
        maxPrice: value[1],
      },
    };
    dispatch(filteredSearch(data));
  }, [value, author, genre]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputBlur = () => {
    if (value[0] < price!.minPrice) {
      setValue([price!.minPrice, value[1]]);
    }

    if (value[0] > price!.maxPrice) {
      setValue([price!.maxPrice, price!.maxPrice]);
    }

    if (value[1] < price!.minPrice) {
      setValue([price!.minPrice, price!.minPrice]);
    }

    if (value[1] > price!.maxPrice) {
      setValue([value[0], price!.maxPrice]);
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.currentTarget.id === "minInput") {
      setValue([Number(event.currentTarget.value), value[1]]);
    } else {
      setValue([value[0], Number(event.currentTarget.value)]);
    }
  };

  return (
    <div>
      <div
        style={
          /* Switch to style component */ {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }
        }
      >
        <PriceInput
          id="minInput"
          value={value[0]}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="number"
        />
        <PriceInput
          id="maxInput"
          value={value[1]}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="number"
        />
      </div>
      <Slider
        min={0}
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default PriceSlider;
