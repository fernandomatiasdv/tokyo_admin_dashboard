import {FC, useContext} from 'react';
import {CssBaseline, Container, Box, Toolbar, List, Divider, IconButton, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useWindowSize } from 'usehooks-ts';
import { drawerHeight, sentences } from '../utils/constants/constants';
import {DrawerVertical, AppBarCustomaized as AppBar} from '../styles/CustomizedComponents';
import { mainListItems } from '../components/listItems';
import { NavigationBarProps } from '../typed/interfaces';
import Stack from '@mui/material/Stack';
import NavBarButton from '../components/NavBarButton';
import UserLogged from '../components/UserLogged';
import NavBarContext from '../contexts/NavBarContext';

const NavigationBar:FC<NavigationBarProps> = (props) => {
    const {children} = props;
    //const [open, setOpen] = useState(true);
    const { width } = useWindowSize()
    const { open, setOpen } = useContext(NavBarContext);
    const toggleDrawer = () => setOpen(!open);
    const widthWindow = JSON.stringify( width )
    const breakpoint = Number(widthWindow) <= 600 ? "sm" : "md"
    const display = breakpoint === "md" ? "block" : "none"
    return (
        <Box sx={{ display: 'flex', width: "100%" }}>
            <CssBaseline />
            <AppBar open={open} sx={{ display }} >
                <Toolbar sx={{ pr: '24px', '& MuiToolbar-root MuiToolbar-regular css-r6ewbb-MuiToolbar-root': {minHeight: "48px", width: "50%"}}}>
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
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={3}
                    >
                        <Button aria-label="notification" 
                            variant="outlined" 
                            size="large"
                            sx={{ 
                                mr: "20px", 
                                p: '12px',  
                                border: '1px solid #DADADA' 
                            }}
                        >
                            {sentences.layouts.appBar.notifications > 0 ?  
                                <NotificationIcon /> : 
                                <NotificationsOutlinedIcon />
                            }
                        </Button>
                        <Box sx={{position: 'absolute', right: "20px"}}>
                            <UserLogged />
                        </Box>
                    </Stack>

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
                    {open && <Box sx={{padding: "20px"}}>
                        <NavBarButton />
                    </Box>}
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