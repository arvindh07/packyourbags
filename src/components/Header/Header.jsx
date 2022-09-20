import {React} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  // const [autoComplete, setAutoComplete] = useState(null);
  // const onLoad = (autoC) => {
  //   setAutoComplete(autoC);
  // }
  // const onPlaceChanged = () => {
  //   const lat = autoComplete.getPlace().geometry.location.lat();
  //   const lng = autoComplete.getPlace().geometry.location.lng();

  //   setCoordinates({lat,lng});
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#ffffff",color:"#fff"}}>
        <Toolbar sx={{
          display:"flex",
          justifyContent:{xs:"flex-start",md:"space-between"},
          alignItems:{xs:"flex-start",md:"center"}, 
          flexDirection:{xs:"column",md:"row"},
          padding:{xs:"15px 5vw",md:"0 2vw"},
        }}>
          <Typography variant="h6" component="div" 
            sx={{ 
              display: "block",
              color:"#000",
              fontWeight:"bolder",
              borderRadius:"8px",
              fontSize:"1.8rem",
              textShadow:"0 1px 5px rgba(0,0,0,0.5)"
            }}>
            Pack Your Bags
          </Typography>
          <Box display="flex" mt={{xs:1,sm:0}} width={{xs:"100%",md:"auto"}} alignItems={{xs:"flex-start",md:"center"}} flexDirection={{xs:"column",md:"row"}}>
            <Typography 
              sx={{ 
                display:{xs:"none",md:"block"},
                flexGrow: 1,
                color:"black",
                fontWeight:"bold",
                fontSize:"1rem",
              }}>
              Explore places</Typography>
            {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
              <Box sx={{
                // position: 'relative',
                borderRadius: "10px",
                backgroundColor: "#c6c3c333",
                marginRight:"8px",
                marginLeft: {xs:"0px",md:"12px"},
                width: {xs:"100%",md:"300px"},
                display:"flex",
                alignItems:"center",
              }}>
                <Box sx={{
                  padding: "8px", 
                  height: '100%', 
                  // position: 'absolute', 
                  pointerEvents: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                }}>
                  <SearchIcon sx={{color:"dodgerBlue"}}/>
                </Box>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{
                    padding: "4px 4px 4px 0", 
                    paddingLeft: "4px", 
                    width:{xs:"100%",md:"20ch"},
                    "&:focus" :{
                      border:"2px solid black",
                    }
                  }}
                />
              </Box>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header