import { Avatar, Chip, Divider, Grid, Paper, Stack, Typography, hexToRgb } from "@mui/material"
import { theme } from "../../styles/theme"
import { FC } from "react"
import { CardBoardProps } from "../../typed/interfaces"
import CardBoardMenu from "./CardBoardMenu"
import _ from "lodash"
import { sentences } from "../../utils/constants/constants"


const getParameters = (index:string):string => {
    const selectParameter = {
        "all": ["primary", "Todos"],
        "testing": ["info", "A evaluar"],
        "tested": ["success", "Evaluados"]
    }
    return selectParameter[index]
}

const CardBoard:FC<CardBoardProps> = (props) => {
    const {title, chips, lastactualization, state} = props
    //const {all, testing, tested} = chips
    return(
        <Paper
            sx={{width: '316px',
                border: `1px solid ${theme.grayScale[100]}`,
                borderRadius: '10px'
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography component="p" variant="subtitle1" 
                        sx={{fontFamily: 'Roboto',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: '16px',
                            alignItems: "center"
                        }}
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <CardBoardMenu />
                </Grid>
            </Grid>
            <Divider />
            <Stack
                direction="column" gap="2"
            >

                <Stack
                    direction="row" gap="2"
                >
                    {_.mapKeys(chips, (clave:string, value:number) => {
                        return(
                            value > 0 &&
                                <Chip 
                                    avatar={<Avatar>{value}</Avatar>}
                                    color={getParameters(clave)[0]}
                                    label={getParameters(clave)[1]}
                                />
                        )}
                    )}
                </Stack>
                {
                    [lastactualization, state].forEach(f => {
                        return(
                            <Typography component="p" variant="subtitle1" 
                                sx={{fontFamily: 'Roboto',
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: '16px',
                                    alignItems: "center"
                                }}
                            >
                                {sentences.components.cardboard[`"${f}"`]}: <span>{f}</span>
                            </Typography>
                        )
                    })
                }
            </Stack>
        </Paper>
    )
}

export default CardBoard