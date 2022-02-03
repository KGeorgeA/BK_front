import React from "react";
import { Breadcrumbs } from "./Breadcrumbs.styles";
import { BreadcrumbsItem } from "./BreadcrumbsItem.styles";

function MainHeader() {
  const items: string[] = ["s", "2", "1a"];
  return (
    <Breadcrumbs>
      {items.map((item, index: number) => {
        return (
          <BreadcrumbsItem>
            {index} {item}
          </BreadcrumbsItem>
        );
      })}
    </Breadcrumbs>
  );
}

export default MainHeader;
