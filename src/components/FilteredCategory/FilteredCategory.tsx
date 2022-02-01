import { Checkbox } from "@mui/material";
import React from "react";

const FilteredCategory = (props: { filter: string }) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div>
      {props.filter}
      <Checkbox
        checked={checked}
        onChange={() => /* Это понятно) */ setChecked(!checked)}
      ></Checkbox>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></Checkbox>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></Checkbox>
    </div>
  );
};

export default FilteredCategory;
