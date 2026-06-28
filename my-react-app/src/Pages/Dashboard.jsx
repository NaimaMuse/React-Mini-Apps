import { useState } from "react";

const recentOrders = [
  { id: "ORD001", name: "Ahmed Ali", product: "Laptop Stand", price: 45, amount: 1, status: "Completed" },
  { id: "ORD002", name: "Ali Hassan", product: "Wireless Mouse", price: 25, amount: 2, status: "Pending" },
  { id: "ORD003", name: "Fatima Noor", product: "Keyboard", price: 90, amount: 1, status: "Completed" },
  { id: "ORD004", name: "Hassan Omar", product: "USB-C Hub", price: 35, amount: 1, status: "Cancelled" },
  { id: "ORD005", name: "Maryan Said", product: "Headset", price: 65, amount: 1, status: "Completed" },
];

function Home() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? recentOrders
      : recentOrders.filter((order) => order.status === filter);

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Store Overview</h1>
        <p>Real-time sales performance metrics</p>
      </div>

      {/* STATS */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{recentOrders.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed Revenue</h3>
          <p>
            $
            {recentOrders
              .filter(o => o.status === "Completed")
              .reduce((sum, o) => sum + o.price, 0)}
          </p>
        </div>

        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>{recentOrders.filter(o => o.status === "Pending").length}</p>
        </div>

      </div>

      {/* TABLE SECTION */}
      <div className="table-section">

        <div className="table-header">
          <h2>Recent Transactions</h2>

          <div className="filter-box">
            <label>Filter:</label>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.product}</td>
                <td>${order.price}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Home;