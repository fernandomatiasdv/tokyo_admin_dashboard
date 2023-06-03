import { Box, Grid, Stack } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { cardsBoard, sentences } from "../utils/constants/constants"
import CardBoard from "../components/CardTablero/CardBoard"


const Tableros = () => {
    return(
        <Stack>
            <HeaderPages
                title={sentences.pages.board.title}
                subtitle={sentences.pages.board.subtitle}
                breadcrumbs={sentences.pages.board.breadcrumbs}
                buttonName={sentences.pages.board.buttonName}
                buttonIcon={sentences.pages.board.buttonIcon}
                buttonAction={sentences.pages.board.buttonAction}
            />
            <Grid container>
                {cardsBoard && cardsBoard.map((card, index) =>
                    <Grid item xs={12} md={4} gap={3}>
                        <Box sx={{sm: '10px' , md: '10px', ml: "20px", mr: "20px"}}>
                            <CardBoard  
                                key={index}
                                title={card.title}
                                chips={card.chips}  
                                lastactualization={card.lastactualization}
                                state={card.state}
                            /> 
                        </Box>
                    </Grid>
                )}
            </Grid>

        </Stack>
    )
}

export default Tableros
