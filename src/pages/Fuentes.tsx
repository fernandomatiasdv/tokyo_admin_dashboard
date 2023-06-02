import { Toolbar } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { sentences } from "../utils/constants/constants"

const Fuentes = () => {
    return(
        <Toolbar>
            <HeaderPages
                title={sentences.pages.fonts.title}
                subtitle={sentences.pages.fonts.subtitle}
                breadcrumbs={sentences.pages.fonts.breadcrumbs}
                buttonName={sentences.pages.fonts.buttonName}
                buttonIcon={sentences.pages.fonts.buttonIcon}
                buttonAction={sentences.pages.fonts.buttonAction}
            />
        </Toolbar>
    )
}

export default Fuentes