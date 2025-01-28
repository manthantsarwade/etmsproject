import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom"; 
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PreviewIcon from "@mui/icons-material/Preview";

const Sidebar = () => {
  return (
    <Box sx={{ overflow: "auto",height:"100%" }}>
      <List sx={{ marginTop: "55px", color: "white" }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/managerAddEmployee" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Employee" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/managerTaskApproval" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <PreviewIcon />
            </ListItemIcon>
            <ListItemText primary="Task Approval" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/managerHome" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="View Task Status" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/managerUpdateEmployee" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <PreviewIcon />
            </ListItemIcon>
            <ListItemText primary="Update Employee" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/managerAddTask" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Task" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/update-task" sx={{ paddingTop: "25px" }}>
            <ListItemIcon>
              <PreviewIcon />
            </ListItemIcon>
            <ListItemText primary="Update Task" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
