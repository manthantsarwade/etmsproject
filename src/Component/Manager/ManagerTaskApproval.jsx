import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box, Toolbar } from '@mui/material';
import Bar from '../Bar';
import ManagerSidebar from './ManagerSidebar';

const columns = [
  { width: 100, label: 'Title', dataKey: 'Title' },
  { width: 150, label: 'Description', dataKey: 'Description' },
  { width: 100, label: 'Priority', dataKey: 'Priority' },
  { width: 150, label: 'Assigned to', dataKey: 'Assignedto' },
  { width: 130, label: 'End Date', dataKey: 'Enddate' },
];

const rows = [
  { Title: 'Task 1', Description: 'Complete project documentation', Priority: 'High', Assignedto: 'Alice Johnson', Enddate: '2024-12-15' },
  { Title: 'Task 2', Description: 'Code review for module A', Priority: 'Medium', Assignedto: 'Bob Smith', Enddate: '2024-11-20' },
  { Title: 'Task 3', Description: 'Prepare presentation slides', Priority: 'Low', Assignedto: 'Charlie Brown', Enddate: '2024-11-30' },
  { Title: 'Task 4', Description: 'Update website design', Priority: 'High', Assignedto: 'Diana Prince', Enddate: '2024-12-01' },
  { Title: 'Task 5', Description: 'Optimize database queries', Priority: 'Medium', Assignedto: 'Bruce Wayne', Enddate: '2024-11-25' },
];

export default function ManagerTaskApproval() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Bar />

      <Box sx={{ display: 'flex' }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: '240px', // Fixed width for the sidebar
            flexShrink: 0,  // Prevent sidebar from shrinking
            backgroundColor: '#673ab7',
            color: 'white',
            height: '100vh',
            position: 'fixed', // Sidebar fixed to the left
            top: 0,           // Start from the top of the viewport
            left: 0,          // Align it to the left
          }}
        >
          <ManagerSidebar />
        </Box>

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#D3C5E5',
            minHeight: '100vh',
            marginLeft: '240px',  // Leave space for the sidebar
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Spacer for Toolbar */}
          <Toolbar />

          {/* Page Title */}
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Task Approval</h2>

          {/* Task Table */}
          <TableContainer component={Paper} style={{ maxWidth: '80%', maxHeight: '325px', overflow: 'auto' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.dataKey}
                      style={{
                        width: column.width,
                        backgroundColor: '#B39DDB',
                        fontWeight: 'bold',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell key={column.dataKey}>{row[column.dataKey]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '80%',
              marginTop: 4,
            }}
          >
            <Button variant="contained" color="success">
              View Document
            </Button>
            <Button variant="contained" color="error">
              Update Task Status
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
