import { useState } from "react";

function ProductApp() {
  const menu = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Fries", price: 30 },
    { id: 3, name: "Soda", price: 20 },
    { id: 4, name: "Ice Cream", price: 40 },
  ];

  const [order, setOrder] = useState([]);

  function addToOrder(item) {
    setOrder([...order, item]);
  }

  function removeItem(index) {
    const newOrder = order.filter((_, i) => i !== index);
    setOrder(newOrder);
  }

  function clearOrder() {
    setOrder([]);
  }

  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="product-page">

      <div className="product-header">
        <h1>🍔 Product Ordering App</h1>
        <p>Select your favorite food items</p>
      </div>

      <div className="menu-section">

        <h2>Menu Items</h2>

        <div className="menu-grid">

          {menu.map((item) => (

            <div key={item.id} className="menu-card">

              <h3>{item.name}</h3>

              <p>${item.price}</p>

              <button
                className="add-btn"
                onClick={() => addToOrder(item)}
              >
                Add to Order
              </button>

            </div>

          ))}

        </div>

      </div>

      <div className="order-section">

        <h2>🛒 Current Order</h2>

        {order.length === 0 ? (

          <p className="empty-order">
            Order is empty. Click items to add!
          </p>

        ) : (

          <>

            {order.map((item, index) => (

              <div key={index} className="order-item">

                <span>
                  {item.name} - ${item.price}
                </span>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>

              </div>

            ))}

            <div className="total-section">

              <h3>Total: ${total}</h3>

              <button
                className="clear-btn"
                onClick={clearOrder}
              >
                Clear Order
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default ProductApp;