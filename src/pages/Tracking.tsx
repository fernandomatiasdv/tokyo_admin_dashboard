import { Box, Grid, Stack } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { cardsTracking, sentences } from "../utils/constants/constants"
import CardTracking from "./CardTracking"

const Tracking = () => {
    return(
        <Stack>
            <HeaderPages
                title={sentences.pages.tracking.title}
                subtitle={sentences.pages.tracking.subtitle}
                breadcrumbs={sentences.pages.tracking.breadcrumbs}
                buttonName={sentences.pages.tracking.buttonName}
                buttonIcon={sentences.pages.tracking.buttonIcon}
                buttonAction={sentences.pages.tracking.buttonAction}
            />
            <Grid container>
                {cardsTracking && cardsTracking.map((card, index) =>
                    <Grid item xs={12} md={12}>
                        <Box sx={{sm: '10px' , md: '10px', mt: "30px"}}>
                            <CardTracking  
                            /> 
                        </Box>
                    </Grid>
                )}
            </Grid>

        </Stack>
    )
}

export default Tracking