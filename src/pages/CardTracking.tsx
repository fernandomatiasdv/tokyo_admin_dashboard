import { Grid, Paper, Typography } from "@mui/material"
import { stylesCardTracking } from "../styles"

const CardTracking = () => {
    return( 
        <Grid container>
            <Paper
                sx={stylesCardTracking}
            >
                <Grid container>
                    <Grid item xs={10}>
                        <Typography >

                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default CardTracking