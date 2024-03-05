import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    // combining every big component together in a page
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;
  return (
    <section className="menu">
      <h2>Our menu</h2>
      <div className="pizzas">
        {/* conditional rendering with ternary operator (? :)  */}
        {pizzasLength > 0 ? (
          <>
            {/* It's fragment that can be used to combine multiple jsx elements */}
            <p className="pizzas__text">
              Authentic Italian Pizzeria with creative and delicios pizza from
              oven. Try it!
            </p>
            <div className="pizzas__wrapper">
              {pizzas.map((pizza) => (
                // new pizzaObj prop for taking all pizzaData for every pizza item
                // key prop for performance that used for items that have unique values like pizza names
                <Pizza pizzaObj={pizza} key={pizza.name} /> // Looped every pizza data and create new pizza items
              ))}
            </div>
          </>
        ) : (
          <p className="menu__alert">
            Oopss, we are working on problems, please come back later :)
          </p>
        )}
      </div>
    </section>
  );
}

function Pizza({ pizzaObj }) /* pass props (properties) as object */ {
  return (
    <article className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="spinachi-pizza" />
      <div>
        <h2 className="pizza__heading">{pizzaObj.name}</h2>
        <p className="pizza__text">{pizzaObj.ingredients}</p>
        <p className="pizza__price">
          {/* if pizza is sold out, render sold out p else pizza price */}
          {pizzaObj.soldOut ? (
            <p className="pizza--sold">Sold Out</p>
          ) : (
            pizzaObj.price + 0.99 + "$"
          )}
        </p>
      </div>
    </article>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  console.log(currentHour);
  const openingHours = 10;
  const closingHours = 22;
  const isOpen = currentHour >= openingHours && currentHour <= closingHours;

  return (
    // Conditional Rendering if the restaurant is open or not
    <footer className="footer">
      {isOpen ? (
        // return jsx in js mode
        <Order closingHours={closingHours} />
      ) : (
        <div className="order">
          <p className="footer__text">
            We're now closed and happy to see you between {openingHours}:00 and{" "}
            {closingHours}
            :00 :D
          </p>
        </div>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p className="footer__text">
        We're open until {props.closingHours}:00. Come to visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // making React strict for the whole component page and it renders twicely
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
