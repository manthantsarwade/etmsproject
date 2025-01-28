import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import { InputLabel, FormControl, MenuItem, Select, TextareaAutosize } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PreviewIcon from "@mui/icons-material/Preview";
import Bar from "../Bar";
import{useState} from "react";
import ManagerSidebar from "./ManagerSidebar"; 

const ManagerAddTask = () => {
  const[title,setTitle]=useState("");
  const[employee,setEmployee]=useState("");
  const[endDate,setEndDate]=useState("");
  const[priority,setPriority]=useState("");
  const[description,setDescription]=useState("");

  const onAddTask=()=>{
    if(title==="" || employee==="" || endDate==="" || priority==="" || description===""){
      alert("Please fill all the fields");
    }
    else{
      console.log("Title: ",title);
      console.log("Employee: ",employee);
      console.log("End Date: ",endDate);
      console.log("Priority: ",priority);
      console.log("Description: ",description);
    }
  }

  return (
    <>
      {/* Top bar */}
      <Bar />

      {/* Parent container with flex display */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Sidebar */}
        <Box
          sx={{
            width: 240,
            flexShrink: 0,
            backgroundColor: "#673ab7",
            color: "white",
          }}
        >
          <ManagerSidebar /> 
        </Box>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#D3C5E5",
            height: "100%",
          }}
        >
          {/* Toolbar spacer */}
          <Toolbar />

          {/* Title */}
          <div
            style={{
              textDecoration: "underline",
              display: "flex",
              justifyContent: "center",
              marginBlock: "10px",
            }}
          >
            <h1>Add Task</h1>
          </div>

          {/* Form */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column", 
              gap: 3, 
              width: "100%",
              maxWidth: "600px",
              margin: "auto",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="title"
              label="Title"
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              sx={{ width: "100%" }} 
            />

            <TextField
              required
              id="employee"
              label="Employee"
              type="text"
              onChange={(e)=>setEmployee(e.target.value)}
              sx={{ width: "100%" }}
            />

            <TextField
              id="end-date"
              label="End Date"
              type="date"
              onChange={(e)=>setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: "100%" }} 
            />

            {/* Priority Dropdown */}
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                id="priority"
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
                label="Priority"  
              >
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="low">Low</MenuItem>
              </Select>
            </FormControl>

            {/* Description Textarea */}
            <Box>
              <InputLabel id="description" sx={{ mb: 1 }}>
                Description
              </InputLabel>
              <TextareaAutosize
                aria-label="Description"
                id="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Enter task description"
                minRows={4}
                style={{
                  padding: "16px",
                  borderRadius: "5px",
                  border: "1px solid #e6dede",
                  width: "100%", // Ensures full width
                }}
              />
            </Box>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <button
               
                onClick={(e) => {
                  e.preventDefault(); 
                  onAddTask(); 
                }}
                
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#673ab7",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add Task
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ManagerAddTask;
