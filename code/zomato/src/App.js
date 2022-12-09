import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import React from "react";
import RestaurantDetails from "./Components/RestaurantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    //path: "/restaurantDetails",
    path: "/restaurantDetails/:rName",
    element: <RestaurantDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
