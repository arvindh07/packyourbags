import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header, List, Map } from "./components/index";
import CssBaseline from '@mui/material/CssBaseline';
import { getPlacesData } from "./api";
import { Coronavirus } from "@mui/icons-material";

const App = () => {
    const [places,setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[])

    useEffect(() => { 
        if(bounds){
            getPlacesData(bounds.ne,bounds.sw)
                .then((data) => {
                    setPlaces(data);
                })
        }   
    },[coordinates,bounds])
    
    return (
        <>
            <CssBaseline>
                <Header />
                <Grid container spacing={2} style={{width:"100%"}}>
                    <Grid item xs={12} md={6} >
                        <List places={places}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Map 
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            />
                    </Grid>
                </Grid>
            </CssBaseline>
        </>
    )
}

export default App;