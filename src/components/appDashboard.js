import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { svgBurger } from './svgs'
import TableProducts from './tableProducts';

import { DrawerHeader, Main } from './muiStyle/styleMui';
import Menu from './menu';
const drawerWidth = 350;
export default function AppDashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div className="component-10-wrapper">
                    <div className="component-10">
                        <div className="head">
                            <div className="stores-name">Store's name</div>
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {svgBurger}
                                </IconButton>
                            </DrawerHeader>
                        </div>
                        <Menu/>
                    </div>
                </div>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />          
                <TableProducts />
            </Main>
        </Box>
    );
}