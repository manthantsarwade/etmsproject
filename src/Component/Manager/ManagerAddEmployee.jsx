import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { TextField,FormControl,InputLabel,Select,MenuItem,Toolbar,Button} from "@mui/material";
import Bar from "../Bar";
import ManagerSidebar from "./ManagerSidebar";

const ManagerAddEmployee = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[role,setRole]=useState("");
  const[department,setDepartment]=useState("");


  const onAddEmployee=()=>{
    if(name==="" || email==="" || password==="" || role==="" || department===""){
      alert("Please fill all the fields");  
    }
    else{
      console.log("Name: ",name);
      console.log("Email: ",email);
      console.log("Password: ",password);
      console.log("Role: ",role);
  }
  }


  return (
    <>
      {/* Top navigation bar */}
      <Bar />

      {/* Parent container with flex layout */}
      <Box sx={{ display: "flex", height: "100%" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: "240px",
            flexShrink: 0,
            backgroundColor: "#673ab7",
            color: "white",
          }}
        >
          <ManagerSidebar />
        </Box>

        {/* Main content area */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#D3C5E5",
            p: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Spacer for toolbar */}
          <Toolbar />

          {/* Title */}
          <div
            style={{
              textDecoration: "underline",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h1>Add Employee</h1>
          </div>

          {/* Form */}
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              margin: "0 auto", // Center the form horizontally
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              {/* Input fields */}
              <TextField
                required
                id="name"
                label="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
              />

              {/* Role selection */}
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel id="select-role">Select Role</InputLabel>
                <Select labelId="select-role" id="role" value={role} onChange={(e)=>setRole(e.target.value)} label="Select Role">
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </FormControl>

              {/* Department selection */}
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel id="select-department">Select Department</InputLabel>
                <Select
                  labelId="select-department"
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  label="Select Department"
                >
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                </Select>
              </FormControl>

              
            </div>
            <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                        }}>
                            <Button variant="contained" color="secondary" onClick={onAddEmployee}>
                                Add New Employee
                            </Button>
                        </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ManagerAddEmployee;
