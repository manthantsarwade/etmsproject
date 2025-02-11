import { Routes, Route, HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';

// Import Components
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import ManagerTaskApproval from './Component/Manager/ManagerTaskApproval';
import ManagerHome from './Component/Manager/ManagerHome';
import ManagerAddTask from './Component/Manager/ManagerAddTask';
import AdminViewManager from './Component/Admin/AdmiViewManager';
import AdminViewProjectDetails from './Component/Admin/AdminViewProjectDetails';
import AdminAddProject from './Component/Admin/AdminAddProject';
import EmployeeHome from './Component/Employee/EmployeeHome';
import EmployeeProfile from './Component/Employee/EmployeeProfile';
import EmployeeTaskSubmit from './Component/Employee/EmployeeTaskSubmit';
import AdminViewReq from './Component/Admin/AdminViewReq';
import ManagerUpdatedTask from './Component/Manager/ManagerUpdatedTask';

const App = () => {
  return (
    <>
      <HashRouter>
        <ToastContainer autoClose={1200} />
        <LoadingBar color="#f11946" height={3} shadow="true" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/managerTaskApproval" element={<ManagerTaskApproval />} />
          <Route path="/managerHome" element={<ManagerHome />} />
          <Route path="/managerAddTask" element={<ManagerAddTask />} />
          <Route path="/adminViewManager" element={<AdminViewManager />} />
          <Route path="/adminAddProject" element={<AdminAddProject />} />
          <Route path="/adminViewProject" element={<AdminViewProjectDetails />} />
          <Route path="/employeeHome" element={<EmployeeHome />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} />
          <Route path="/taskSubmit/:taskId" element={<EmployeeTaskSubmit />} />
          <Route path="/adminViewRequest" element={<AdminViewReq />} />
          <Route path="/managerUpdateTask/:taskId" element={<ManagerUpdatedTask />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
