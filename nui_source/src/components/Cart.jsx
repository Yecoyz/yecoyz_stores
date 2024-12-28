import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Button, IconButton, CircularProgress } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PayDialog from "./PayDialog";

const Cart = ({ cartItems, incrementAmount, decrementAmount }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price;
      const amount = item.amount;
      return total + price * amount;
    }, 0);
  };

  const handleOpenDialog = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDialogOpen(true);
    }, 500);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const total = calculateTotalPrice();

  const getCartSummary = () => {
	return cartItems.map((item) => ({
    id: item.id,
		name: item.name,
		amount: item.amount,
	}));
  }

  return (
    <>
      <PayDialog 
      open={isDialogOpen} 
      onClose={handleCloseDialog} 
      cartItems={getCartSummary()} 
      />
      <Box
        style={{
          width: "23rem",
          background: "#212121",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "44.6rem",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Box
          style={{
            flex: 1,
            width: "100%",
            background: "#272727",
            borderRadius: "4px",
            overflow: "auto",
          }}
        >
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "10px",
            }}
          >
            {cartItems.map((item, index) => (
              <ListItem
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem",
                  background: "#333",
                  borderRadius: "4px",
                }}
              >
                <ListItemText
                  primary={item.label}
                  secondary={`Pris: ${item.price} kr`}
                  primaryTypographyProps={{ color: "white" }}
                  secondaryTypographyProps={{ color: "#ccc" }}
                />
                <IconButton
                  style={{ color: "white" }}
                  onClick={() => incrementAmount(item.label)}
                >
                  <ArrowUpwardIcon />
                </IconButton>

                <Box
                  style={{
                    background: "#272727",
                    height: "50px",
                    width: "50px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      color: "white",
                    }}
                  >
                    {item.amount}
                  </Typography>
                </Box>

                <IconButton
                  style={{ color: "white" }}
                  onClick={() => decrementAmount(item.label)}
                >
                  <ArrowDownwardIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          style={{
            width: "21rem",
            height: "3rem",
            borderRadius: "4px",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#272727",
          }}
        >
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Totalt: {total} KR
          </Typography>
          <Button
            variant="contained"
            style={{
              background: cartItems.length > 0 ? "#ef6c00" : "#555",
              color: "#FFFFFF",
              fontWeight: "bold",
              textTransform: "none",
              cursor: cartItems.length > 0 ? "pointer" : "not-allowed",
              position: "relative",
              width: "100px",
              height: "36px",
            }}
            onClick={cartItems.length > 0 && !isLoading ? handleOpenDialog : null}
            disabled={cartItems.length === 0 || isLoading}
          >
            {isLoading ? (
              <CircularProgress
                size={20}
                style={{
                  color: "white",
                }}
              />
            ) : (
              "Betala"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
