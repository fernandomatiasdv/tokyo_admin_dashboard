import {useState} from "react";
import { Box, Button, Card, CardHeader, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { sentences } from "../../utils/constants/constants"
import { useContext } from "react";
import NavBarContext from "../../contexts/NavBarContext";
import { icons } from "../../utils/functions";
import { createUserFormData } from "../../typed/interfaces";
import { createUserFormDataInitialValues } from "../../utils/constants/initialValues";
import CreateUserAvatar from "./CreateUserAvatar";

const CreateUserForm = () => {
    const { setOpenCreateUserModal } = useContext(NavBarContext);
    const [formData, setFormData] = useState<createUserFormData>(createUserFormDataInitialValues)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleClickCloseModal = () => {
        setFormData(createUserFormDataInitialValues)
        setShowPassword(false)
        setOpenCreateUserModal(false)
    }
    console.log(formData)
    return(
        <Grid container>
            <Card sx={{width: "100%", m:0}} elevation={0}>
                <CardHeader
                    title={sentences.components.user.create.title}
                    action={<IconButton onClick={()=>handleClickCloseModal()}> <CloseIcon /> </IconButton>}
                />
                <Divider />
                <Box component="form">
                    <Grid container>
                        <Grid item xs={2}>
                            <CreateUserAvatar />
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box sx={{p: "15px 10px"}}>
                                        <TextField
                                            id={sentences.components.user.create.form.firstname}
                                            label={sentences.components.user.create.form.firstname}
                                            type="text"
                                            variant="outlined"
                                            value={formData.firstName}
                                            //error={}
                                            //helperText={}
                                            onChange={e => setFormData(prevState => ({
                                                ...prevState,
                                                firstName: e.target.value
                                            }))}
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{p: "15px 10px"}}>
                                        <TextField
                                            id={sentences.components.user.create.form.lastName}
                                            label={sentences.components.user.create.form.lastName}
                                            type="text"
                                            variant="outlined"
                                            value={formData.lastName}
                                            //error={}
                                            //helperText={}
                                            onChange={e => setFormData(prevState => ({
                                                ...prevState,
                                                lastName: e.target.value
                                            }))}
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{p: "15px 10px"}}>
                                    <TextField
                                        id={sentences.components.user.create.form.email}
                                        label={sentences.components.user.create.form.email}
                                        type="email"
                                        variant="outlined"
                                        value={formData.email}
                                        //error={}
                                        //helperText={}
                                        onChange={e => setFormData(prevState => ({
                                            ...prevState,
                                            email: e.target.value
                                        }))}
                                        fullWidth
                                    />
                                </Box>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>
                                    <FormControl sx={{ m: 1 , width: "100%", p:"8px 10px" }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            fullWidth
                                            onChange={e => setFormData(prevState => ({
                                                ...prevState,
                                                password: e.target.value
                                            }))}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
{/*                                    <Box sx={{p: "15px 10px"}}>
                                        <TextField
                                            id={sentences.components.user.create.form.password}
                                            label={sentences.components.user.create.form.password}
                                            type="password"
                                            variant="outlined"
                                            value={formData.password}
                                            //error={}
                                            //helperText={}
                                            onChange={e => setFormData(prevState => ({
                                                ...prevState,
                                                password: e.target.value
                                            }))}
                                            fullWidth
                                        />

                                    </Box>
                                        */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{p: "15px 10px"}}>
                                        <TextField
                                            id={sentences.components.user.create.form.userRole}
                                            label={sentences.components.user.create.form.userRole}
                                            select
                                            type="text"
                                            variant="outlined"
                                            value={formData.userRol}
                                            //error={}
                                            //helperText={}
                                            onChange={e => setFormData(prevState => ({
                                                ...prevState,
                                                userRol:  parseInt(e.target.value)
                                            }))}
                                            fullWidth
                                        >
                                            {sentences.components.user.create.form.userRoleSelect.map((option) => (
                                                <option 
                                                    key={option.value} 
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={8}>
                            {/* Espacio en blanco */}
                            <></>

                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{p: "15px 10px"}}>
                                <Button
                                    color={sentences.components.commonButton.cancel.color}
                                    startIcon={icons(sentences.components.commonButton.cancel.icon)}
                                    variant={sentences.components.commonButton.cancel.variant}
                                    sx={{width: "100%"}}
                                    onClick={()=>handleClickCloseModal()}
                                >
                                    {sentences.components.commonButton.cancel.label}
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{p: "15px 10px"}}>
                                <Button
                                    color={sentences.components.commonButton.save.color}
                                    startIcon={icons(sentences.components.commonButton.save.icon)}
                                    variant={sentences.components.commonButton.save.variant}
                                    sx={{width: "100%"}}
                                >
                                    {sentences.components.commonButton.save.label}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Card>
        </Grid>
    )
}

export default CreateUserForm