import { Toolbar } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { sentences } from "../utils/constants/constants"

const Fuentes = () => {
    return(
        <Toolbar>
            <HeaderPages
                title={sentences.pages.marketplacefonts.title}
                subtitle={sentences.pages.marketplacefonts.subtitle}
                breadcrumbs={sentences.pages.marketplacefonts.breadcrumbs}
                buttonName={sentences.pages.marketplacefonts.buttonName}
                buttonIcon={sentences.pages.marketplacefonts.buttonIcon}
                buttonAction={sentences.pages.marketplacefonts.buttonAction}
            />
        </Toolbar>
    )
}

export default Fuentes