import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import FreeSoloCreateOption from './FreeSoloCreateOption';

import {useRef} from 'react'

export default function ButtonAppBar() {
  const navRef = useRef();
  const navRefTwo = useRef();

  const showNavBar = () => {
    navRefTwo.current.classList.toggle('responsive-search-bar')
    navRef.current.classList.toggle('responsive-search-bar')
    
  }

  

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}  >
        <AppBar position="static" >
          <Toolbar>
            <div ref={navRefTwo} className='nav-bar-container'>
              <IconButton 
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  LOGO
                </Typography>
          
              <Button color="inherit" onClick={showNavBar}> <SearchIcon/> </Button>
            </div>
            <div className='responsive-search-bar nav-search-bar' ref={navRef}>
              <Button color="inherit" onClick={showNavBar}> <ChevronLeftIcon/> </Button>
              <FreeSoloCreateOption  />
            </div>
            
          </Toolbar>
        </AppBar>
        
      </Box>

  
      
    


    </div>

  );
}
