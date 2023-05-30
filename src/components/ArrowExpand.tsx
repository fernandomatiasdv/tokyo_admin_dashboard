import {ListItemButton} from '@mui/material';
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { arrowExpandProps } from "../typed/interfaces";


const ArrowExpand = (props:arrowExpandProps) => {
    const {collapsed} = props;
    return(
        <ListItemButton disableRipple={true} disableGutters={true}
            sx={{position: "absolute", right: "10px"}} >
            {
                collapsed ? <ExpandLess /> : <ExpandMore />
            }
        </ListItemButton>
    )
}
export default ArrowExpand