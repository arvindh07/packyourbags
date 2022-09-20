import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Paper, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rating from '@mui/material/Rating';

const Map = (props) => {
  const {coordinates,setCoordinates,setBounds,places} = props;
  const desktop = useMediaQuery('(min-width:600px)');

  return (
    <Box style={{width:"100%",height:"85vh"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={""}
        // onClick={""}
        onChange={(e) => {
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
        }}
      >
        {places?.map((place,index) => {
          return (
            <div key={index} lat={Number(place?.latitude)} lng={Number(place?.longitude)}
              sx={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}>
              {desktop ? (
                <Paper elevation={3} sx={{display:"flex",flexDirection:"column",padding:"10px",width:"100px",justifyContent:"center"}}>
                  <Typography>{place?.name}</Typography>
                  <img 
                    src={place?.photo ? place?.photo?.images?.medium?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                    alt={place?.name} />
                    <Rating size="small" value={Number(place?.rating)} readOnly />
                </Paper>
              ): (
                  <LocationOnIcon fontSize='large' color="error" />
              )}
            </div>
          )
        })}

      </GoogleMapReact>
    </Box>
  )
}

export default Map