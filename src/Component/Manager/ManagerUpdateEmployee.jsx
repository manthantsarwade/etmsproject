import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Bar from '../Bar';
import ManagerSidebar from './ManagerSidebar';

const ManagerUpdateEmployee = () => {
    const [role, setRole] = React.useState('');
    const [department, setDepartment] = React.useState('');

    // Handlers for dropdown menus
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <>
            <Bar />
            <Box sx={{ display: 'flex' }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        width: '240px',
                        flexShrink: 0,
                        backgroundColor: '#673ab7',
                        color: 'white',
                        
                       
                    }}
                >
                    <ManagerSidebar/>
                </Box>

                {/* Main Content */}
                <Box
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: '#D3C5E5',
                        height: '100%',
                       
                    }}
                >
                    <Toolbar />
                    {/* Page Title */}
                    <Box
                        sx={{
                            textDecoration: 'underline',
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 4,
                        }}
                    >
                        <h1>Update Employee</h1>
                    </Box>

                    {/* Form */}
                    <Box
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: '#D3C5E5',
                        height: '100vh',
                    }}
                >
                        <TextField
                            required
                            id="name"
                            label="Name"
                            type="text"
                            sx={{ mb: 2 ,mr:5}} // Adds space below each field
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"
                            type="email"
                            sx={{ mb: 2 ,mr:5}} // Adds space below each field
                        />
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            sx={{ mb: 2 ,mr:5}} // Adds space below each field
                        />

                        {/* Role Dropdown */}
                        <FormControl sx={{ m: 1, minWidth: '300px' }}>
                            <InputLabel id="select-role">Select Role</InputLabel>
                            <Select
                                labelId="select-role"
                                id="role"
                                value={role}
                                onChange={handleRoleChange}
                                label="Select Role"
                            >
                                <MenuItem value="Manager">Manager</MenuItem>
                                <MenuItem value="Employee">Employee</MenuItem>
                                <MenuItem value="Intern">Intern</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Department Dropdown */}
                        <FormControl sx={{ m: 1, minWidth: '300px' }}>
                            <InputLabel id="select-department">Select Department</InputLabel>
                            <Select
                                labelId="select-department"
                                id="department"
                                value={department}
                                onChange={handleDepartmentChange}
                                label="Select Department"
                            >
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Update Button */}
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 3, 
                                width: '300px', 
                                textAlign: 'center',
                            }}
                        >
                            Update Employee
                        </Button>
                            </div>
                      
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ManagerUpdateEmployee;
