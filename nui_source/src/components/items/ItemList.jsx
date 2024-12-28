import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Item from "./Item";

const ItemList = ({ items, addToCart }) => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const handleMessage = (event) => {
  //     if (event.data.action === "loadItems") {
  //       setItems(event.data.items.map((item, index) => ({
  //         id: index + 1,
  //         label: item.label,
  //         name: item.name,
  //         price: item.price,
  //         logo: item.image,
  //       })));
  //     }
  //   };

  //   window.addEventListener("message", handleMessage);

  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

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
