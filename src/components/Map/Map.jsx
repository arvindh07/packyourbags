import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@mui/material';

const Map = (props) => {
  const {coordinates,setCoordinates,setBounds} = props;

  // const coordinates = {
  //   lat:0,
  //   lng:0
  // }

  return (
    <Box style={{width:"100%",height:"85vh"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCxvuIWxhvzqzEhKeHyiEG3OhJFn1Xd7iQ" }}
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

      </GoogleMapReact>
    </Box>
  )
}

export default Map