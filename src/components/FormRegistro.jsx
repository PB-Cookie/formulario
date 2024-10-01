import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
    <Container justifyContent="center" >
      <Paper elevation={24} square={false} sx={{ textAlign: 'center', minHeight: "500px", mt: "10%", padding: "20px", }}  >
        <Typography variant='h6' color='black' sx={{ mt: 2, mb: 2 }} padding={"20px"}>Registra tu mascota</Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>

            {/* PRIMERA LÍNEA GRID */}
            <Grid size={5}>
              <TextField
                required
                label='Nombre'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeName}

              />
            </Grid>
            <Grid size={5}>
              <TextField
                label='Apellido'
                variant='outlined'
                fullWidth
                value={data.breed}
                onChange={handleChangeBreed}

              />
            </Grid>
            <Grid size={2}>
              <TextField
                required
                label='edad'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeName}

              />
            </Grid>
            {/* FIN PRIMERA LÍNEA GRID */}

            <Grid size={5}>
              <FormControl >
                <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="femenino" control={<Radio />} label="Female" />
                  <FormControlLabel value="masculino" control={<Radio />} label="Male" />
                  <FormControlLabel value="otro" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid size={7}>
              HOLA
            </Grid>
            {/* FIN SEGUNDA LÍNEA GRID */}

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