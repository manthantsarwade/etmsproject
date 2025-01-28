import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Bar from '../Bar';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';

const columns = [
  { width: 100, label: 'Name', dataKey: 'Name' },
  { width: 100, label: 'Email', dataKey: 'Email' },
  { width: 100, label: 'Description', dataKey: 'Description' },
  { width: 110, label: 'Gender', dataKey: 'Gender' },
  { width: 110, label: 'Delete', dataKey: 'Delete' },
];

const initialRows = [
  { Name: 'Samar', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
  { Name: 'Samar2', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
  { Name: 'Samar3', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
  { Name: 'Samar4', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
  { Name: 'Samar5', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
  { Name: 'Samar6', Email: 'samar@gmail.com', Description: 'Complete project documentation', Gender: 'M' },
];

export default function ManagerTaskApproval() {
  const [rows, setRows] = React.useState(initialRows);

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
      <Bar />
      <AdminSidebar />
      <div
        style={{
          marginTop: '60px',
          background: "#D3C5E5",
          marginLeft: '240px',
          height: "100vh",
          width: `calc(100% - 240px)`,
        }}
      >
        <h2 style={{ textAlign: 'center', marginBlock: '6px', paddingBlock: "20px" }}>View Manager</h2>

        <TableContainer
          component={Paper}
          style={{ maxHeight: 280, overflow: 'auto' }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.dataKey}
                    style={{
                      width: column.width,
                      backgroundColor: '#735DA5',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{ background: "#C4DAD2" }}>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) =>
                    column.dataKey === 'Delete' ? (
                      <TableCell key={column.dataKey}>
                        <Button
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    ) : (
                      <TableCell key={column.dataKey}>
                        {row[column.dataKey]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <Button variant="contained" color="secondary">
            <Link to="/addManager" style={{ color: "white", textDecoration: "none" }}>
              Add New Manager
            </Link>
          </Button>

        </div>
      </div>
    </>
  );
}
