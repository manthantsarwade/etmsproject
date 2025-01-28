import { AppBar, Toolbar, Typography } from '@mui/material';
import staff from '../assets/staff.png';

const Bar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#A594F9' }}>
        <Toolbar>
          <Typography  noWrap component="div" style={{display:"flex",alignItems:"center"}}>
            <img src={staff} alt="" style={{width:"50px",height:"50px"}} />
           <h2 style={{marginLeft:"25px",color:"white"}}> Employee Task Management</h2>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Bar;
