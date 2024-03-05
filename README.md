# Fast Pizza Co. React App (BEGINNER LEVEL)

Welcome to the Fast Pizza Co. React App! This project is my first attempt at building a React application, and it showcases some fundamental React concepts.

## Project Overview

Fast Pizza Co. React App is a simple web application that displays a menu of pizzas available at our pizzeria. Users can view details about each pizza, such as its name, ingredients, and price. Additionally, users can see if a pizza is currently sold out.

## Features

- Display a list of pizzas available at Fast Pizza Co.
- Show details for each pizza, including name, ingredients, and price.
- Indicate whether a pizza is sold out or not.
- Provide information about the restaurant's opening hours and the ability to place an order.

## Technologies Used

This project is built using React. The following fundamental React concepts were used in this project:

- **Components**: The application is divided into reusable components, such as Header, Menu, Pizza, and Footer.
- **Props**: Props are used to pass data from parent components to child components. For example, the Pizza component receives a pizza object as a prop to display pizza details.
- **Conditional Rendering**: Conditional rendering is used to display different content based on certain conditions. For example, the application checks if there are pizzas available before rendering the menu.
- **State**: While state management is kept simple in this project, the concept of state is used to determine whether a pizza is sold out and to calculate opening hours dynamically.
- **Hooks**: The project utilizes React hooks, such as useState, useEffect, and custom hooks, to manage component state and side effects.

## Project Structure

The project structure follows a standard React application layout:

- **src/**: Contains the source code of the application.
  - **components/**: Contains React components used in the application.
  - **index.js**: Entry point of the application.
- **public/**: Contains public assets, such as images.

## Getting Started

To run the Fast Pizza Co. React App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/fast-pizza-co-react-app.git`
2. Navigate to the project directory: `cd fast-pizza-co-react-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
