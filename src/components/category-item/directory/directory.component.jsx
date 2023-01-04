import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../category-item.component";

function Directory(props) {
  return (
    <div className="categories-container ">
      {props.catagories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
