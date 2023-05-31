import {Box, Card, Avatar, Typography } from '@mui/material'
import { sentences } from '../../utils/constants/constants';

const UserLogged = () => {
    return (
        <Card elevation={0} sx={{ display: 'flex', maxHeight: '44px' }}>
            <Avatar  
                variant="rounded"
                alt={sentences.layouts.appBar.avatar.name}
                src={sentences.layouts.appBar.avatar.pic}
                sx={{ width: 44, height: 44 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-evenly", minHeight: "44px", pl: "10px"  }}>
                <Typography 
                    component="p" 
                    sx={{fontFamily: 'Roboto',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: '16px'
                    }}>
                    {sentences.layouts.appBar.avatar.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="p"
                sx={{fontFamily: 'Roboto',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: '16px'
                }}>
                    {sentences.layouts.appBar.avatar.bussiness}
                </Typography>
            </Box>
        </Card>
    );
}

export default UserLogged;