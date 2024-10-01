import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import { useState } from 'react'


function FormRegistro() {
  const [data, setData] = useState({ name: '', breed: '' })

  const handleSubmit = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();
    console.log(data)
  }

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value
    })
    //console.log(data)
  }


  const handleChangeBreed = (e) => {
    setData({

      ...data,
      breed: e.target.value
    })
  }

  return (
    <Container>
      <Paper elevation={12} square={false} sx={{ textAlign: 'center' }} >
      <Typography variant='h6' color='black' sx={{ mt: 2, mb: 2 }}>Registra tu mascota</Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
      >
        <Grid container spacing={0}>
          <Grid size={6}>
            <TextField
              required
              label='Nombre Mascota'
              variant='outlined'
              fullWidth
              value={data.name}
              onChange={handleChangeName}

            />
          </Grid>
          <Grid size={6}>
            <TextField
              label='Raza'
              variant='outlined'
              fullWidth
              value={data.breed}
              onChange={handleChangeBreed}

            />
          </Grid>
          <Grid size={12}>
            <Button type='submit' variant='outlined' fullWidth color='gray'>Registrar</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
      </Container >
    
  )

}




export default FormRegistro