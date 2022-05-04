import React from "react";
import Item from "./item";
import "./item-style.css";

const Items = (props) => {
  return (
    <div className="App">
      {props.words.map((item, index) => (
        <Item
          key={index}
          isOpen={item.isOpen}
          title={item.title}
          content1={item.content1}
          content2={item.content2}
        />
      ))}
    </div>
  );
};

Items.defaultProps = {
  words: [
    {
      title: "桐蔭",
      content1: "学園",
      content2: "高等学校",
      isOpen: true,
    },
  ],
};
export default Items;
