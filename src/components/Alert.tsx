import {useContext} from 'react';
import {Alert as AlertMUI, Grid, Button, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavBarContext from '../contexts/NavBarContext';
import {AlertProps} from "../typed/interfaces"
import { sentences } from '../utils/constants/constants';

const Alert = (props:AlertProps) => {
    const { openAlert, setOpenAlert } = useContext(NavBarContext);
    const {label, severity} = props

    return (
        <Grid item xs={12}>
            <Collapse in={openAlert}>
                <AlertMUI
                    severity={severity}
                    sx={{ mb: 2 }}
                    onClose={() => setOpenAlert(false)}
                    action={<>
                            <Button
                                color={severity}
                                size="small"
                                onClick={() => sentences.components.alertUserManagment.plan.action()}
                            >
                                {sentences.components.alertUserManagment.plan.label}
                            </Button>
                            <IconButton
                                color={severity}
                                size="small"
                                onClick={() => setOpenAlert(false)}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </>
                        }
                >
                    {label}
                </AlertMUI>
            </Collapse>
        </Grid>
    );
}

export default Alert
