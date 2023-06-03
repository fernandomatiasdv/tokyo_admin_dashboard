import {Avatar, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { sentences } from '../utils/constants/constants';
import { getPropertiesFromRol } from '../utils/functions';

const UserManagementTable = () => {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    {
                        sentences.components.userTable.columns.map(column => <TableCell>{column}</TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {sentences.components.userTable.rows.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Avatar  src={`${row.pic}`} alt={row.userName} />
                        </TableCell>
                        <TableCell >{row.realName}</TableCell>
                        <TableCell >{row.userName}</TableCell>
                        <TableCell >{row.email}</TableCell>
                        <TableCell >{row.posts}</TableCell>
                        <TableCell >
                            <Chip 
                                label={getPropertiesFromRol(row.rol).nameRol}
                                color={getPropertiesFromRol(row.rol).color}
                            />
                        </TableCell>
                        <TableCell >{row.posts}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default UserManagementTable