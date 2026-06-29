import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
        <h2>
            React Apps
            </h2>
            <ul>

            <li>
            <Link to="/">Dashboard</Link>
            </li>
            <li>
            <Link to="/calculator">Calculator</Link>
            </li>
            <li>
            <Link to="/bmi">BMI</Link>
            </li>
            <li>
            <Link to="/age">Age</Link>
            </li>
                        </ul>

            </>
    )
}
export default Sidebar;
