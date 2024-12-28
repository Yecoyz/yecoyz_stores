import React, { useState } from "react";
import Box from "@mui/material/Box";

import Header from "./Header";
import Cart from "./Cart";
import ItemList from "./items/ItemList";

const Container = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.label === item.label);
  
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.label === item.label
            ? { ...cartItem, amount: parseInt(cartItem.amount) + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, amount: 1 }];
      }
    });
  };
  

  const incrementAmount = (itemLabel) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
       item.label === itemLabel
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );
  };

  const decrementAmount = (itemLabel) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
         item.label === itemLabel
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter((item) => item.amount > 0)
    );
  };
  

  return (
    <Box
      sx={{
        width: "1200px",
        height: "750px",
        backgroundColor: "#212121",
      }}
    >
      <Header />
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#212121",
          display: "flex",
        }}
      >
        <ItemList items={items} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
        />
      </Box>
    </Box>
  );
};

export default Container;
