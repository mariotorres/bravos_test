import React from 'react'
import {Box, Grid, Paper} from "@mui/material";
import BravosAppBar from "./Components/BravosAppBar.jsx";
import Breeds from "./Components/Breeds";
import DogChart from "./Components/DogChart.jsx";

function App() {

  return (
    <Box flexGrow={1}>
        <BravosAppBar/>

        <Grid container spacing={2} justifyContent="center">
            <Grid size={12} sx={{maxWidth: '1000px'}}>
                <Paper elevation={3} sx={{margin: 2}}>
                    <Breeds/>
                </Paper>

                <Paper elevation={3} sx={{margin: 2}}>
                    <DogChart/>
                </Paper>

            </Grid>
        </Grid>
    </Box>
  )
}

export default App
