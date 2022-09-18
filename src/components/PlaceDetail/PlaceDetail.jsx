import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const PlaceDetail = (props) => {
  const { place } = props;
  console.log(place);
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        title={place?.title}
        image={place?.photo ? place?.photo?.images?.medium?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}>
      </CardMedia>
      <CardContent>
        <Typography gutterbottom variant="h5">{place?.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterbottom variant="subtitle1">{place?.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterbottom variant="subtitle1">{place?.ranking}</Typography>
        </Box>
        {/* {place?.awards?.map((award,i) => (
          <Typography key={i}>{award}</Typography>
        ))} */}
        {place?.cuisine?.map((c, index) => {
          return (
            <Chip key={c.key} size="small" label={c.name} sx={{ margin: "5px 5px 5px 0" }} />
          )
        })}
        {place?.address && (
          <Typography gutterbottom variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
            <LocationOnIcon />
            {place?.address}
          </Typography>
        )
        }
        {place?.phone && (
          <Typography gutterbottom variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
            <PhoneIcon />
            {place?.phone}
          </Typography>
        )
        }<CardActions>
          {place?.web_url && (
            <Button size="small" onClick={() => window.open(place?.web_url,"_blank")}>Trip Advisor</Button>
          )}
          {place?.website && (
            <Button size="small" onClick={() => window.open(place?.website,"_blank")}>Official Site</Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetail