import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Bar from '../Bar';
import ManagerSidebar from './ManagerSidebar';

// Styled table cell for customization
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

// Styled table row for alternating row colors
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// Sample data for rows
function createData(name, email, password, role, department, buttons) {
    return { name, email, password, role, department, buttons };
}

// Mock rows data
const rows = [
    createData('Samer', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'IT',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
    createData('Samer1', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'ACCOUNTANT',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
    createData('Samer2', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'FINANCE',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
    createData('Samer3', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'IT',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
    createData('Samer4', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'ACCOUNTANT',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
    createData('Samer5', 'Samrsing2@gmail.com', 1234556, 'Accountant', 'FINANCE',
        <>
            <Button variant="contained" color="success">Update</Button>
            <Button variant="contained" color="error" style={{ marginLeft: "5px" }}>Delete</Button>
        </>
    ),
];

const ManagerViewEmployee = () => {
    return (
        <>
            <Bar />
            <div style={{ marginLeft: '240px', paddingTop: '20px', textAlign: 'center' }}>
                <h2>View Employee</h2>
            </div>
            <ManagerSidebar />
            <TableContainer
                component={Paper}
                sx={{
                    flexGrow: 1,
                    p: 3,
                    backgroundColor: "#D3C5E5",
                    height: "100vh",
                    marginLeft: '240px',
                    width: `calc(100% - 240px)`,
                    paddingBottom: "20px",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Employee Details</h2>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Password</StyledTableCell>
                            <StyledTableCell align="center">Role</StyledTableCell>
                            <StyledTableCell align="center">Department</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.password}</StyledTableCell>
                                <StyledTableCell align="center">{row.role}</StyledTableCell>
                                <StyledTableCell align="center">{row.department}</StyledTableCell>
                                <StyledTableCell align="center">{row.buttons}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ManagerViewEmployee;
