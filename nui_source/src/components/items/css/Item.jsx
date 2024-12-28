import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";

const Item = ({ item, addToCart }) => {
  const { logo, name, price } = item;

  return (
    <Box
      style={{
        background: "#272727",
        height: "10rem",
        width: "10rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        objectFit: "contain",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      <img
        src={logo}
        alt={name}
        style={{ width: "60%", height: "60%" }}
      />
      <Box style={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          color="#e8e8e8"
          style={{
            width: "145px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            color: "#388e3c",
            fontSize: "0.85rem",
            fontWeight: 400,
            marginTop: "5px",
          }}
        >
          {price} kr
        </Typography>
      </Box>
      <IconButton
        style={{
          color: "#388e3c",
        }}
        aria-label="add to shopping cart"
        onClick={() => addToCart(item)}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default Item;
