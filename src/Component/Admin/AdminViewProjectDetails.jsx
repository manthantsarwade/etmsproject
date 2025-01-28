import * as React from 'react';
import '/src/App.css';
import { PieChart } from '@mui/x-charts';
import Bar from '../Bar';
import AdminSidebar from './AdminSidebar';


const AdminViewProjectDetails = () => {
    return (<>
        <Bar />
        <AdminSidebar/>
        <div style={{ background: "#F5F7F8", width: "100%", height: "100vh" }}>
            <div style={{ display: "flex", paddingTop:"90px", marginLeft: '250px', width: `calc(100% - 250px)` }}>
                <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ height: "130px", borderRadius: "18px", background: "#78B3CE", width: "80%" }}><h2 style={{ textAlign: "center", paddingTop: "8px" }}>Total task</h2></div>
                </div>
                <div style={{ width: "50%" }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>

            </div>
<hr style={{width:"100%",height:"2px",background:"black",border:"none",marginTop:"14px"}}/>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "20px", marginLeft: '250px', width: `calc(100% - 250px)` }}>

                <div style={{ width: "90%", height: "250px", background: "#41B3A2", borderRadius: "22px" }}>
                    <h2 style={{ textAlign: "center", marginTop: "10px" }}>Assigned Task</h2>
                </div>
            </div>
        </div>

    </>

    );
}

export default AdminViewProjectDetails;