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
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import { Divider } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

function FormRegistro() {
  const [data, setData] = useState({ name: '', sname: '', age: '', radgroup: useState('femenino'), lang: useState('')})
  const [value, setValue] = React.useState(0);

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
  }

  const handleChangeSname = (e) => {
    setData({
      ...data,
      sname: e.target.value
    })
    //console.log(data)
  }

  const handleChangeAge = (e) => {
    setData({
      ...data,
      age: e.target.value
    })
    //console.log(data)
  }
  const handleRadgroup = (e) => {
    setData({
      ...data,
      radgroup: e.target.value
    })
  };

const handleSelect = (e) => {
  setData({
    ...data,
    lang: e.target.value
    
  })
}


  const handleClear = () => {
    setData({
      ...data,
      name: "",
      sname: "",
      age: "",
      radgroup: '',
      lang: '',
    })
    setValue(0)

  }

  return (
    <Container justifyContent="center" >
      <Paper elevation={24} square={false} sx={{ textAlign: 'center', minHeight: "500px", mt: "10%", padding: "20px", }}  >
        <Typography variant='h5' color='black' sx={{ mt: 2, mb: 2 }} padding={"20px"}>FORMULARIO</Typography>
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
                value={data.sname}
                onChange={handleChangeSname}

              />
            </Grid>
            <Grid size={2}>
              <TextField
                required
                label='Edad'
                variant='outlined'
                type='number'
                fullWidth
                value={data.age}
                onChange={handleChangeAge}

              />
            </Grid>
            {/* FIN PRIMERA LÍNEA GRID */}

            <Grid size={5}>
              <FormControl >
                <FormLabel id="radioGroup">Género</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={data.radgroup}
                  onChange={handleRadgroup}
                >
                  <FormControlLabel value="femenino" control={<Radio />} label="Female" />
                  <FormControlLabel value="masculino" control={<Radio />} label="Male" />
                  <FormControlLabel value="otro" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid size={7} sx={{ display: "flex", marginLeft: '0' }}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Lenguaje de Programación</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.lang}
          label="Lenguaje de Programación"
          onChange={handleSelect}
        >
          <MenuItem value={1}>Python</MenuItem>
          <MenuItem value={2}>Java</MenuItem>
          <MenuItem value={3}>JavaScript</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            {/* FIN SEGUNDA LÍNEA GRID */}
            <Grid size={12}>
              <Divider />

            </Grid>
            <Grid size={12} textAlign={'left'} display={'flex'}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography sx={{ display: 'inline', marginLeft:"9px" }} >Puntúa esta encuesta</Typography>

            </Grid>

            <Grid size={12} textAlign={'left'}>
              <FormControlLabel required control={<Checkbox />} label="He leído los términos y condiciones." />
            </Grid>


            <Grid size={6}>
              <Button type='submit' variant='contained' fullWidth>Registrar</Button>
            </Grid>
            <Grid size={6}>
              <Button onClick={handleClear} variant='outlined' fullWidth color='error'>Limpiar</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container >

  )

}




export default FormRegistro