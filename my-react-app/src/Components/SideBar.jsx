import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">

      <h2 className="logo">React Apps</h2>

      <ul className="menu">

        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/calculator">
            Calculator
          </NavLink>
        </li>

        <li>
          <NavLink to="/bmi">
            BMI
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default SideBar;