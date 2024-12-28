import React, { useState } from "react";
import { Box, Dialog, Typography, Button, CircularProgress } from "@mui/material";
import { callback } from './utilities/callback'

const PayDialog = ({ open, onClose, cartItems, total }) => {
  const [isLoadingCard, setLoadingCard] = useState(false);
  const [isLoadingCash, setLoadingCash] = useState(false);

  const handlePayment = async (method) => {
    const setLoading = method === "Card" ? setLoadingCard : setLoadingCash;
    setLoading(true);
  
    const paymentData = {
      method,
      items: cartItems,
      total,
    };

    try {
      const response = await callback("payment", paymentData);
  
      if (response.success) {
      } else {
      }
    } finally {

      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 500);
    }
  };
  

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#212121",
          borderRadius: "8px",
          padding: "1.5rem",
          maxWidth: "400px",
        },
      }}
    >
      <Typography
        variant="h6"
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Vilken betalningsmetod?
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Button
          variant="contained"
          style={{
            background: "#ef6c00",
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "none",
            padding: "0.75rem",
            borderRadius: "8px",
            width: "220px",
            alignSelf: "center",
          }}
          onClick={() => handlePayment("Card")}
          disabled={isLoadingCard}
        >
          {isLoadingCard ? (
            <CircularProgress size={20} style={{ color: "white" }} />
          ) : (
            "Kort"
          )}
        </Button>
        <Button
          variant="contained"
          style={{
            background: "#272727",
            color: "#FFFFFF",
            fontWeight: "bold",
            textTransform: "none",
            padding: "0.75rem",
            border: "1px solid #ef6c00",
            borderRadius: "8px",
            width: "220px",
            alignSelf: "center",
          }}
          onClick={() => handlePayment("Cash")}
          disabled={isLoadingCash}
        >
          {isLoadingCash ? (
            <CircularProgress size={20} style={{ color: "white" }} />
          ) : (
            "Kontant"
          )}
        </Button>
      </Box>
    </Dialog>
  );
};

export default PayDialog;