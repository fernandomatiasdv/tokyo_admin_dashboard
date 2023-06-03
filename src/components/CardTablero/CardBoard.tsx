import { Avatar, Box,Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { theme } from "../../styles/theme"
import { FC } from "react"
import { CardBoardProps } from "../../typed/interfaces"
import CardBoardMenu from "./CardBoardMenu"
import _ from 'lodash'
//import { sentences } from "../../utils/constants/constants"
import { getParameters } from "../../utils/functions"
import "./CardBoard.css"
import GroupAvatars from "./GroupAvatars"

const CardBoard:FC<CardBoardProps> = (props) => {
    const {title, chips, lastactualization, state} = props
    //const {all, testing, tested} = chips
    return(
        <Paper
            sx={{width: "100%",
                border: `1px solid ${theme.grayScale[100]}`,
                borderRadius: '10px',
                marginTop: '28px'
            }}
        >
            <Stack
                direction="column" gap="2"
            >
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Box sx={{p:'20px 16px 20px 16px'}}>
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
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{p: '16px 14px 20px 4px'}}>
                            <CardBoardMenu />
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Stack direction="row" spacing={2} justifyContent="space-evenly" sx={{mt: "20px", mb: "20px"}}>
                    {_.map(chips, (value:number, clave:string ) => {
                        return(
                            value > 0 &&
                                <Chip
                                    key={clave+value}
                                    avatar={<Avatar >{value}</Avatar>}
                                    color={getParameters(clave)[0]}
                                    label={getParameters(clave)[1]}
                                    sx={{
                                        '& MuiChip-label': {
                                            fontSize: "13px",
                                            lineHeight: '18px',
                                        }
                                    }}
                                />
                        )}
                    )}
                </Stack>
                <Typography component="p" variant="subtitle1" 
                    sx={{fontFamily: 'Roboto',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: '16px',
                        alignItems: "center",
                        ml: "20px",
                        mb: "20px"
                    }}
                >
                    Ultima actualización: 
                     <span className="description">{lastactualization}</span>
                </Typography>
                <Grid container>
                    <Grid item xs={7}>
                        <Stack direction="row" alignItems="center" >
                            <Typography component="p" variant="subtitle1" 
                                sx={{fontFamily: 'Roboto',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: '16px',
                                alignItems: "center",
                                ml: "20px",
                                mb: "20px"
                            }}
                            >
                                Estado: 
                                <span className="description">{state}</span>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{position: "relative", bottom: "20px", right: "20px"}}>
                            <GroupAvatars />
                        </Box>
                    </Grid>
                </Grid>
                    {/*[lastactualization, state].forEach((f,i) => {
                        return(
                            <Typography component="p" key={i} variant="subtitle1" 
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
                    })*/}
            </Stack>
        </Paper>
    )
}

export default CardBoard