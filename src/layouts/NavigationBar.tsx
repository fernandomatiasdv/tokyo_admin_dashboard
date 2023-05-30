import {FC, useState} from 'react';
import {CssBaseline, Box, Toolbar, List, Divider, IconButton, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useWindowSize } from 'usehooks-ts';
import { drawerHeight } from '../utils/constants/constants';
import {DrawerVertical, AppBarCustomaized as AppBar} from '../styles/CustomizedComponents';
import { mainListItems } from '../components/listItems';
import { NavigationBarProps } from '../typed/interfaces';
import NavBarButton from '../components/NavBarButton';


const NavigationBar:FC<NavigationBarProps> = (props) => {
    const {children} = props;
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);
    const { width } = useWindowSize()
    const widthWindow = JSON.stringify( width )
    const breakpoint = Number(widthWindow) <= 600 ? "sm" : "md"
    const display = breakpoint === "md" ? "block" : "none"
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar open={open} sx={{ display }} >
                <Toolbar sx={{ pr: '24px'}}>
                    <IconButton
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {breakpoint === "md" ?
                <DrawerVertical variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                    </List>
                    <Box sx={{padding: "20px"}}>
                        <NavBarButton />
                    </Box>
                </DrawerVertical>
            :
                <List component="nav">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            position: "fixed",
                            bottom: 0,
                            width: '100vw',
                            height: drawerHeight,
                        }}
                    >
                            {mainListItems}
                    </Box>
                </List>
            }
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    p: {xs: "12px 16px", sm: '80px 42px 60px 42px'}
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default NavigationBar