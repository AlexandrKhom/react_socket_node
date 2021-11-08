import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { TemporaryDrawer } from "./TemporaryDrawer";
import { DialogSelect } from "./SelectInterval";
import { ScrollDialog } from "../HistoryInfo";
import { useState } from "react";
import Button from "@mui/material/Button";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    height: 44,
    display: 'flex',
    alignItems: 'center'
  },
}));


export function ProminentAppBar() {

  const [ plus, setPlus ] = useState(true);

  const isPlus = () => {
    setPlus(!plus)
  }

  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={ { mr: 2 } }>
            <TemporaryDrawer/>
          </IconButton>
          <ScrollDialog/>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={ { flexGrow: 1, alignSelf: 'flex-end' } }
          >
          </Typography>
          { plus ?
            <Button variant="contained" size="small" onClick={ isPlus }> STOP </Button> :
            <Button variant="contained" size="small" onClick={ isPlus }>RESUME</Button> }
          { plus && <DialogSelect/> }
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon/>
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon/>
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
