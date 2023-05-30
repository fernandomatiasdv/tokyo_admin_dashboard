import {useState} from "react"
import {Box, ListItemButton, ListItemIcon, ListItemText, Toolbar} from '@mui/material';
import { NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useWindowSize from "../hooks/useWindowSize";
import ArrowExpand from "./ArrowExpand";
import { NavLinkItemProps } from "../typed/interfaces";
import { hasChild } from "../utils/functions";

const NavLinkItem: React.FC<NavLinkItemProps> = (props) => {
    const theme = useTheme()
    const { width } = useWindowSize()
    const widthWindow = JSON.stringify( width )
    const breakpoint = Number(widthWindow) <= 600 ? "sm" : "md"
    const {name, selected, icon, child, path}:NavLinkItemProps = props;
    const color = selected ? theme.palette.primary.main : theme.palette.common.black
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return(
        <Toolbar disableGutters={true} >
            <ListItemButton
                key={name}
                LinkComponent={NavLink}
                to={path}
                selected={selected}
                sx={{
                    position: "relative", 
                    display: "flex", 
                    flexDirection: {xs: "column", sm: "row"}
                }} 
                onClick={()=>setCollapsed(!collapsed)}
            >
                <Box sx={{textAlign: "center"}}>
                    <ListItemIcon 
                        sx={{color, 
                            '& .MuiSvgIcon-root': {
                                width:"100%",
                                alignSelf: "center"
                            }
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                </Box>
                <ListItemText 
                    sx={{color}} 
                    primary={name} 
                />
                {breakpoint==="md" && !!child && hasChild(child) &&
                    <ArrowExpand collapsed={collapsed} />
                }
            </ListItemButton>
        </Toolbar>
    )
}

export default NavLinkItem