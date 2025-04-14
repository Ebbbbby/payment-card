import {Stack, Typography } from "@mui/material"
import  Padlock from '../assets/Padlock.svg'
import Ulipa from '../assets/Ulipa.svg'
const Footer = () => {
  return (
    <Stack
      direction="row"
      sx={{
        background: "#fff",
        position: "absolute",
        width:'130px',
        margin:"0 auto",
        bottom: 0,
        left: 0,
        right: 0,
        padding:'2px',
        justifyContent: "center",
        zIndex: 2000
      }}
    >
      <img src={Padlock} />
      <Typography sx={{fontSize: '13px'}}>Secured by</Typography>
      <img src={Ulipa} />
    </Stack>
  );
}

export default Footer