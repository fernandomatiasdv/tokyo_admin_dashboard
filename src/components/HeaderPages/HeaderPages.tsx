import { FC, useState, useEffect, useContext } from "react"
import { HeaderPagesProps } from "../../typed/interfaces"
import { Button, Paper, Stack, Typography } from "@mui/material";
import { icons } from "../../utils/functions";
import {drawerWidth} from "../../utils/constants/constants"
import NavBarContext from "../../contexts/NavBarContext";
import AddIcon from '@mui/icons-material/Add';

const HeaderPages:FC<HeaderPagesProps> = (props) => {
    const {title, subtitle, /*breadcrumbs,*/ buttonName, buttonIcon, buttonAction} = props;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { open } = useContext(NavBarContext);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <Paper elevation={0} 
            sx={{display: "flex", 
                width: `calc(${windowWidth}px - ${windowWidth < 600 ? 0 : drawerWidth}px - ${windowWidth < 600 ? 0 : 84}px - 84px + ${open ? 0 : 84*2}px) ` 
            }}
        >
            <Stack direction="column" justifyContent="flex-start" gap={2} width={1}> 
                {/* breadcrumbs.map( b => <MapBreadcrumbs values={b} />) */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    width={1}
                >
                    <Typography component="p" variant="h1" 
                        sx={{fontFamily: 'Roboto',
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: '35.16px'
                        }}
                    >
                        {title}
                    </Typography>
                    {!!buttonName && 
                        <Button 
                            size="large" 
                            variant="contained" 
                            startIcon={windowWidth < 600 ? null : !!buttonIcon && icons(buttonIcon) }
                            onClick={() => buttonAction()}
                            sx={{   position: windowWidth < 600 ? "fixed" : "relative", 
                                    right: windowWidth < 600 ? "32px" : "inherit",
                                    bottom: windowWidth < 600 ? "100px" : "inherit",
                                    paddingTop: windowWidth < 600 ? '20px' : null,
                                    paddingBottom: windowWidth < 600 ? '20px' : null   }}
                        >
                            {windowWidth < 600 ? <AddIcon /> : buttonName}
                        </Button>
                    }                        
                </Stack>
                {!!subtitle &&
                    <Typography component="p" variant="subtitle1" 
                        sx={{fontFamily: 'Roboto',
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "17px",
                            lineHeight: '19.92px'
                        }}
                    >
                        {subtitle}
                    </Typography>
                }
            </Stack>
        </Paper>
    )
}

export default HeaderPages