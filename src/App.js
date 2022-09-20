import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header, List, Map } from "./components/index";
import CssBaseline from '@mui/material/CssBaseline';
import { getPlacesData } from "./api";

const App = () => {
    const [places,setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[])

    useEffect(() => {
        const filPlaces = places?.filter((place) => place.rating > rating);
        setFilteredPlaces(filPlaces);
    },[rating]);

    useEffect(() => { 
        if(bounds.ne && bounds.sw){
            setLoading(true);
            getPlacesData(type,bounds.ne,bounds.sw)
                .then((data) => {
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setLoading(false);
                })
        }   
    },[type,coordinates,bounds])
    
    return (
        <>
            <CssBaseline>
                <Header />
                <Grid container style={{width:"100%"}}>
                    <Grid item xs={12} md={5} >
                        <List 
                            places={filteredPlaces.length ? filteredPlaces : places} 
                            loading={loading}
                            type={type}
                            setType={setType}
                            rating={rating}
                            setRating={setRating}/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Map 
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            places={filteredPlaces.length ? filteredPlaces : places}
                            />
                    </Grid>
                </Grid>
            </CssBaseline>
        </>
    )
}

export default App;