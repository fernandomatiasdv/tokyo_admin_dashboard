import { FC } from "react"
import { HeaderPagesProps } from "../../typed/interfaces"
import { Button, Stack, Typography } from "@mui/material";
import { icons } from "../../utils/functions";

const HeaderPages:FC<HeaderPagesProps> = (props) => {
    const {title, subtitle, /*breadcrumbs,*/ buttonName, buttonIcon, buttonAction} = props;
    return(
        <Stack direction="column" justifyContent="flex-start" gap={2}>
            {/* breadcrumbs.map( b => <MapBreadcrumbs values={b} />) */}
            <Stack direction="row" justifyContent="space-between">
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
                        sx={{ width: "100%" }} 
                        size="large" 
                        variant="contained" 
                        startIcon={!!buttonIcon && icons(buttonIcon) }
                        onClick={() => buttonAction()}
                    >
                        {buttonName}
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
    )
}

export default HeaderPages