import { Button } from '@mui/material';
import { sentences } from "../utils/constants/constants";
import StarsIcon from '@mui/icons-material/Stars';
import "./NavBarButton.css"

const NavBarButton = () => {
    return(
        <Button 
            sx={{ width: "100%" }} 
            size="large" 
            variant="contained" 
            startIcon={<StarsIcon />}
        >
            {sentences.layouts.appBar.button}
        </Button>
    )
}

export default NavBarButton