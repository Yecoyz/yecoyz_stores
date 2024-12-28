import React from "react";
import Box from "@mui/material/Box";
import Item from "./Item";

const ItemList = ({ addToCart }) => {
  const items = [
    {
      id: 1,
      name: "marabou mjölkchoklad",
      price: 100,
      logo: "https://res.cloudinary.com/coopsverige/image/upload/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_440,w_660/v1727173218/cloud/388555.jpg",
    },
    {
      id: 2,
      name: "kebab",
      price: 50,
      logo: "https://example.com/kebab.jpg",
    },
  ];

  return (
    <Box
      style={{
        width: "73%",
        background: "#212121",
        padding: "10px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignContent: "start",
        justifyContent: "start",
        overflowY: "scroll",
      }}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </Box>
  );
};

export default ItemList;
