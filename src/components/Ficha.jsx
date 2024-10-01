import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';




function Ficha() {
  const [count, setCount] = useState(0)

  // function subirlacuentaxd(){
  //   setCount(count+1)
  // }

  return (
    <Stack direction={{ xs: "row", sm: "row", md: "row", lg: "column", xl: "column" }}
      spacing={{ xs: 0, sm: 1, md: 2, lg: 3, xl: 5 }}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
      }}>
      <Typography variant={{ xs: "h5", sm: "h5", md: "h4", lg: "h3", xl: "h2"  }} component="h2" >
        SOY UN BURRO Y NO VIVO FELIZ
      </Typography>
      <Avatar src="src/assets/OIP.jpg" sx={{ width: 400, height: 400, mb: 5 }} ></Avatar>
      <Button color="white" variant="outlined" onClick={() => setCount((count) => count + 1)} endIcon={<SendIcon />}> {/*onClick={subirlacuentaxd{}}*/}
        Me has hecho {count} rascaditas
      </Button>


    </Stack>
  )
}

export default Ficha
