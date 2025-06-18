import React from "react";
import Header from "./Components/RootLayout/Header";
import Navbar from "./Components/RootLayout/Navbar";
import Banner from "./Components/HomePage/Banner/Index";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" />
      <Route
        path="/home"
        element={
          <>
            <Header /> 
            <Navbar />
            <Banner />
          </>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
