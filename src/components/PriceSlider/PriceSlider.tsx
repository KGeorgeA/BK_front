import React, { useEffect } from "react";

import { Slider } from "@mui/material";
import { PriceInput } from "./PriceSlider.styles";
import { useDispatch } from "react-redux";
import { IBookFilters } from "../../types/book/book.types";
import { filteredSearch } from "../../redux/user/userFilters/userFiltersSlice";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const { price } = useAppSelector((state) => state.bookData);

  //                                                      [minVal/0, maxVal] from DB?
  const [value, setValue] = React.useState<Array<number>>([0, 1000]);

  useEffect(() => {
    const minPrice = price?.minPrice || 0;
    const maxPrice = price?.maxPrice || 1000;
    setValue([minPrice, maxPrice]);
  }, []);

  useEffect(() => {
    const data: IBookFilters = {
      price: {
        minPrice: value[0],
        maxPrice: value[1],
      },
    };
    dispatch(filteredSearch(data));
  }, [value]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputBlur = () => {
    // minValue from DB min price)) (value[0] > minValue? or just 0?)
    if (value[0] < 0) {
      setValue([0, value[1]]);
    }

    // maxValue from DB max price)) (value[0] > maxValue)
    if (value[0] > 1000) {
      setValue([1000, 1000]);
    }

    if (value[1] < 0) {
      setValue([0, 0]);
    }

    if (value[1] > 1000) {
      setValue([value[0], 1000]);
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
