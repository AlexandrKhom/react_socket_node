import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function TemporaryDrawer() {
  const [ state, setState ] = useState({ left: false, });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={ { width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 } }
      role="presentation"
      onClick={ toggleDrawer(anchor, false) }
      onKeyDown={ toggleDrawer(anchor, false) }>
      <List>
        { [ 'it is', 'demo version', 'for full', 'version' ].map((text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>
              { index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }
            </ListItemIcon>
            <ListItemText primary={ text }/>
          </ListItem>
        )) }
      </List>
      <Divider/>
      <List>
        { [ 'u need', 'give me', 'offer 🙂' ].map((text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>
              { index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }
            </ListItemIcon>
            <ListItemText primary={ text }/>
          </ListItem>
        )) }
      </List>
    </Box>
  );

  return (
    <>
      { [ 'left' ].map((anchor) => (
        <React.Fragment key={ anchor }>
          <MenuIcon onClick={ toggleDrawer(anchor, true) }>{ anchor }</MenuIcon>
          <Drawer
            anchor={ anchor }
            open={ state[anchor] }
            onClose={ toggleDrawer(anchor, false) }>
            { list(anchor) }
          </Drawer>
        </React.Fragment>
      )) }
    </>
  );
}
