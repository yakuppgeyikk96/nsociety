import React from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Drawer from '../styled-components/Drawer';
import DrawerHeader from '../styled-components/DrawerHeader';
import { IconButton } from '@mui/material';
import sidebarItems from '../../configs/sidebarItems';

const SideBar = ({ handleDrawerClose, open }) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{ flexGrow: '0' }}
      anchor="left"
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarItems.map(({ title, icon }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar;