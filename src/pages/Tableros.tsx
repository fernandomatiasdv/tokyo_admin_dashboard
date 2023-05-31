import { Toolbar } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { sentences } from "../utils/constants/constants"


const Tableros = () => {
    return(
        <Toolbar>
            <HeaderPages
                title={sentences.pages.board.title}
                subtitle={sentences.pages.board.subtitle}
                breadcrumbs={sentences.pages.board.breadcrumbs}
                buttonName={sentences.pages.board.buttonName}
                buttonIcon={sentences.pages.board.buttonIcon}
                buttonAction={sentences.pages.board.buttonAction}
            />
        </Toolbar>
    )
}

export default Tableros
