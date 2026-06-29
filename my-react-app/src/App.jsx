import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Pages/Dashboard";
import Calculator from "./Pages/Calculator";
import Bmi from "./Pages/Bmi";
import Age from "./Pages/Age";
import Temperature from "./Pages/Temperature";
import Currency from "./Pages/Currency";
import Unit from "./Pages/Unit";
import Grade from "./Pages/Grade";
import Todo from "./Pages/Todo";
import Counter from "./Pages/Counter";
import Salary from "./Pages/Salary";
import Loan from "./Pages/Loan";
import Voting from "./Pages/Voting";
import Quiz from "./Pages/Quiz";
import Product from "./Pages/Product";
import PhoneBook from "./Pages/PhoneBook";
import Attendence from "./Pages/Attendence";
import Expense from "./Pages/Expense";
import Electricity from "./Pages/Electricity";
import WaterBill from "./Pages/WaterBill";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="bmi" element={<Bmi />} />
        <Route path="attendence" element={<Attendence />} />
        <Route path="age" element={<Age />} />
        <Route path="counter" element={<Counter />} />
        <Route path="currency" element={<Currency />} />
        <Route path="electricity" element={<Electricity />} />
        <Route path="expense" element={<Expense />} />
        <Route path="grade" element={<Grade />} />
        <Route path="loan" element={<Loan />} />
        <Route path="phone_book" element={<PhoneBook />} />
        <Route path="product" element={<Product />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="salary" element={<Salary />} />
        <Route path="temperature" element={<Temperature />} />
        <Route path="todo" element={<Todo />} />
        <Route path="unit_converter" element={<Unit />} />
        <Route path="voting" element={<Voting />} />
        <Route path="water_bill" element={<WaterBill />} />
        
      </Route>
    </Routes>
  );
}

export default App;