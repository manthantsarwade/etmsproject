import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Bar from "../Bar";
import ManagerSidebar from "./ManagerSidebar";
import { useState } from "react"; 

const drawerWidth = 250;

const ManagerHome = () => {

 

  return (
    <>
      {/* Top Navigation Bar */}
      <Bar />

      {/* Parent container with flex layout */}
      <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        {/* Sidebar */}
        <div
          style={{
            width: `${drawerWidth}px`,
            background: "#673ab7",
            color: "white",
            position: "fixed",
            height: "100vh",
          }}
        >
          <ManagerSidebar />
        </div>

        {/* Main content */}
        <div
          style={{
            marginLeft: `${drawerWidth}px`,
            flexGrow: 1,
            padding: "20px",
            backgroundColor: "#f5f5f5",
            marginTop:"70px"
          }}
        >
          {/* First row: Total Task and Bar Chart */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            {/* Total Task Card */}
            <div
              style={{
                flex: "0 0 48%",
                height: "230px",
                borderRadius: "18px",
                background: "#78B3CE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "center", color: "white" }}>Total Task</h2>
            </div>

            {/* Bar Chart */}
            <div
              style={{
                flex: "0 0 48%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={230}
                xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
          </div>

          {/* Second row: Assigned Task */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "200px",
                background: "#41B3A2",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "center", color: "white" }}>
                Assigned Task
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerHome;
