import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { FormControl, Grid, Typography } from '@mui/material';
import PlaceDetail from "../PlaceDetail/PlaceDetail"
import { useEffect } from 'react';
import { getPlacesData } from '../../api';

const List = (props) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const {places} = props;
  
  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h6" sx={{marginBottom:"15px"}}>Restaurants, Hotels and Attractions around you</Typography>
      <FormControl sx={{ margin: "0 8px", minWidth: "130px",marginBottom:"30px" }}>
        <InputLabel id="type-label">Type</InputLabel>
        <Select labelId="type-label" value={type} label="Type" onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ margin: "0 8px", minWidth: "130px",marginBottom:"30px"}}>
        <InputLabel id="rating-label">Ratings</InputLabel>
        <Select labelId="rating-label" label="Rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} sx={{height:"55vh",overflow:"auto"}}>
        {places?.map((place,index) => {
          return (
            <Grid item xs={12} key={`${index}`} sx={{boxSizing:"border-box",padding:"12px"}}>
              <PlaceDetail place={place} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default List