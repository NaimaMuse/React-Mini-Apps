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
        <li>
          <NavLink to="/age">
            Age
          </NavLink>
        </li>
        <li>
          <NavLink to="/temperature">
            Temperature
          </NavLink>
        </li>
        <li>
          <NavLink to="/currency">
            Currency
          </NavLink>
        </li>
        <li>
          <NavLink to="/unit_converter">
            Unit Converter
          </NavLink>
        </li>
        <li>
          <NavLink to="/grade">
            Grade
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo">
            ToDo
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/salary">
            Salary
          </NavLink>
        </li>
        <li>
          <NavLink to="/loan">
            Loan
          </NavLink>
        </li>
        <li>
          <NavLink to="/voting">
            Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz">
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/phone_book">
            Phone Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/attendence">
            Attendence
          </NavLink>
        </li>
        <li>
          <NavLink to="/expense">
            Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/electricity">
            Electricity
          </NavLink>
        </li>
        <li>
          <NavLink to="/water_bill">
            Water Bill
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default SideBar;