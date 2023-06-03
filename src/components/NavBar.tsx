import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, ListItem,  ListItemButton } from '@mui/material';


import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { List } from '@mui/icons-material';

const navegationLinks = [
    {
      title: "Home",
      path: "/",
      icon: <InboxIcon />,
    },
    {
      title: "Login",
      path: "/login",
      icon: <DraftsIcon />,
    },
    {
      title: "Register",
      path: "/register",
      icon: <MenuIcon />,
    },
  ];

const NavBar = () => {
    return (
        <Box sx={{ width: 250, background: "tomato", color: "white" }}>
            <nav>
                <List>
                    {navegationLinks.map((item) => (
                        <ListItem
                            disablePadding
                            key={item.title}
                        >
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                            // onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}

export default NavBar;