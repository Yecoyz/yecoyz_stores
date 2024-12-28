import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { callback } from './utilities/callback';

const Header = () => {

  const closeui = () => {
    callback("closeui").then((res) => {})}

  return (
    <Box
    sx={{ 
      backgroundColor: "#272727",
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
    >
    <Typography
    variant='h4'
    color="#e8e8e8"
    style={{
      marginLeft: "10px",
    }}
    >
      Butik
    </Typography>

    <IconButton 
      sx={{
        color: "white",
        "&:hover": {
          color: "#d50000",
        },
      }}
      onClick={closeui}
    >
    <ExitToAppIcon />
    </IconButton>
    </Box>
  )
}

export default Header