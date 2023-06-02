import { Divider, Grid } from "@mui/material"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import { sentences } from "../utils/constants/constants"
import UserManagementTable from "../components/UserManagementTable"
import Alert from "../components/Alert"

const GestionUsuarios = () => {
    return(
        <Grid container>
            <HeaderPages
                title={sentences.pages.userManagement.title}
                subtitle={sentences.pages.userManagement.subtitle}
                breadcrumbs={sentences.pages.userManagement.breadcrumbs}
                buttonName={sentences.pages.userManagement.buttonName}
                buttonIcon={sentences.pages.userManagement.buttonIcon}
                buttonAction={sentences.pages.userManagement.buttonAction}
            />
            
            <Grid xs={12} sx={{mt: "40px" , mb: "40px"}}>
                <Alert 
                    severity="error" 
                    label={sentences.components.alertUserManagment.error} 
                />
            </Grid> 

            {/* FILTROS */}
            <Divider />

            <Grid xs={12} sx={{mt: "40px" , mb: "40px"}}>
                <UserManagementTable />
            </Grid>
        </Grid>
    )
}

export default GestionUsuarios