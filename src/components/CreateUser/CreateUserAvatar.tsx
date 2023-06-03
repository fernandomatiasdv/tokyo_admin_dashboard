import { Avatar, Box, Fab, Stack } from "@mui/material"
import { sentences } from "../../utils/constants/constants"
import UploadIcon from "@mui/icons-material/Upload"

const CreateUserAvatar = ( ) => {
    return(
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{width: "100%", height: "100%"}}
        >
            <Box sx={{p: "80px 50px", position: "relative"}}>
                <Avatar
                    variant="rounded" 
                    src={sentences.components.user.create.avatar.pic} 
                    alt={sentences.components.user.create.avatar.alt} 
                    sx={{ width: 109, height: 109 }}
                />
                <Box sx={{position: "absolute", bottom: "50px", left: "120px"}}>
                    <Fab 
                        color="primary" 
                        aria-label="add" 
                        onClick={()=>alert("upload file")}
                    >
                        <UploadIcon />
                    </Fab>
                </Box>
            </Box>
        </Stack>
    )
}
export default CreateUserAvatar