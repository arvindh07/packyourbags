import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import useStyles from "./Styles";
import { Autocomplete } from '@mui/material';

const Header = () => {
  // const classes = useStyles();
  // const h = () => {
  //   title: {
  //     display: 'none',
  //     [theme.breakpoints.up('sm')]: {
  //       display: 'block',
  //     },
  //   },
  //   search: {
  //     position: 'relative',
  //     borderRadius: theme.shape.borderRadius,
  //     backgroundColor: "red",
  //     '&:hover': "blue",
  //     marginRight: theme.spacing(2),
  //     marginLeft: 0,
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  //   },
  //   searchIcon: {
  //     padding: theme.spacing(0, 2), 
  //     height: '100%', 
  //     position: 'absolute', 
  //     pointerEvents: 'none', 
  //     display: 'flex', 
  //     alignItems: 'center', 
  //     justifyContent: 'center',
  //   },
  //   inputRoot: {
  //     color: 'inherit',
  //   },
  //   inputInput: {
  //     padding: theme.spacing(1, 1, 1, 0), 
  //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
  //     transition: theme.transitions.create('width'), 
  //     width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  //   },
  //   toolbar: {
  //     display: 'flex', 
  //     justifyContent: 'space-between',
  //   },
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
            {/* <Autocomplete> */}
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