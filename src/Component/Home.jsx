import logo from '../assets/staff.png';
import banner from '../assets/banner1.jpg';
import img1 from '../assets/img3.png';
import img2 from '../assets/img4.png';
import office from '../assets/office.png';
import '/src/App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container' >
                {/* Top header section */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "cursive",
                    alignItems: "center",
                    padding: "20px",
                    width: "100%",
                    maxWidth: "100vw",
                }}>
                    <div style={{ display: 'flex' }}>
                        <img src={logo} style={{ width: "40px", height: "40px" }} alt="logo" />
                        <h3 style={{ marginLeft: "25px", color: "#602e9f" }}>
                        <Link to={`/register`} style={{ textDecoration: "none", color: "#602e9f" }}>
                                Employee Task Management System
                            </Link>
                            </h3>
                    </div>
                    <div style={{ display: "flex" }}>
                        <h3 style={{ marginRight: "25px", color: "#602e9f" }}>
                            <Link to={`/register`} style={{ textDecoration: "none", color: "#602e9f" }}>
                                Register
                            </Link>
                        </h3>
                        <h3 style={{ color: "#602e9f" }}>
                            <Link to={`/login`} style={{ textDecoration: "none", color: "#602e9f" }}>
                                Login
                            </Link>
                        </h3>
                    </div>

                </div>

                {/* Banner Section */}
                <div>
                    <img src={office} alt="banner" style={{ width: "100%", height: "70vh", objectFit: "cover" }} />
                </div>

                {/* Content Section 1 */}
                <div style={{
                    width: "100%", maxWidth: "100vw", height: "500px", display: "flex", justifyContent: "space-around",
                    alignItems: "center", background: "antiquewhite", padding: "40px", boxSizing: "border-box"
                }}>
                    <div style={{ width: "40%", fontFamily: "cursive", fontSize: "medium", color: "#602e9f" }}>
                        <h2>Manage Employee and Managers</h2>
                        <p style={{ color: "#602e9f" }}>Task management is important for project teams as teams must communicate the status of various tasks and duties within a project to keep it moving smoothly and on track. Task management can act as a line of defense against major errors. You can also use it to troubleshoot problems that arise. Outsiders can also see a project’s progress in real-time, which is helpful for stakeholders and supervisors. This sense of transparency may be beneficial for receiving feedback and constructive criticism.</p>
                    </div>
                    <img src={img1} alt="img1" style={{ width: "440px", height: "350px", objectFit: "cover" }} />
                </div>

                {/* Content Section 2 */}
                <div style={{
                    width: "100%", maxWidth: "100vw", height: "500px", display: "flex", justifyContent: "space-around",
                    alignItems: "center", background: "aliceblue", padding: "40px", boxSizing: "border-box"
                }}>
                    <img src={img2} alt="img2" style={{ width: "440px", height: "350px", boxShadow: "2px 2px", objectFit: "cover" }} />
                    <div style={{ width: "40%", fontFamily: "cursive", fontSize: "medium", color: "#602e9f" }}>
                        <h2>Welcome to Employee Task Management</h2>
                        <p>A task management system refers to monitoring a project’s tasks via analyzing various stages from start to end. The management system involves actively making decisions to accommodate the changes occurring in real-time to accomplish the tasks. Every scope, resource, budget, recurrence, etc., gets monitored through the task management system. Task management is a significant component of project management and involves a work breakdown structure to divide the project into manageable tasks for the employees working in the specific business.</p>
                    </div>
                </div>

                {/* Horizontal Line */}
                <hr style={{ width: "100%", border: "1px solid #602e9f" }} />

                {/* Footer Section */}
                <div style={{ background: "#fcf6f6" }}>
                    <footer style={{
                        display: 'flex', justifyContent: "space-around", fontFamily: "cursive", padding: "40px", boxSizing: "border-box"
                    }}>
                        <div style={{ width: "40%" }}>
                            <h3 style={{ color: "#602e9f" }}>Employee Task Management</h3>
                            <p>Task management is all about managing a task from start to finish. Learn tips on using task management tools, apps, or a task management system.</p>
                        </div>
                        <div>
                            <h3 style={{ color: "#602e9f" }}>About</h3>
                            <p>abdde</p>
                            <p>abdde</p>
                            <p>abdde</p>
                            <p>abdde</p>
                        </div>
                        <div>
                            <h3 style={{ color: "#602e9f" }}>Contact</h3>
                            <p>abdde</p>
                            <p>abdde</p>
                            <p>abdde</p>
                            <p>abdde</p>
                        </div>
                        <div>
                            <h3 style={{ color: "#602e9f" }}>Social Media</h3>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Whatsapp</p>
                        </div>
                    </footer>
                </div>

                <hr style={{ width: "100%", border: "1px solid #602e9f" }} />

                {/* Copyright Section */}
                <div>
                    <h6 style={{ color: "#602e9f", textAlign: "center", padding: "10px" }}>Copyright © 2024-2030 to Leftovers. All rights reserved.</h6>
                </div>
            </div>
        </>
    );
}

export default Home;
