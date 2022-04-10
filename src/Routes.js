import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from "./screens/Cart";
import Products from "./screens/Products";
// import UserProfile from "./screens/UserProfile";
import Navigation from "./Navigation";
export default function RoutesFor() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/*<Route path="/cart" component={Cart} />*/}
        {/*<Route path="/userProfile" component={UserProfile} />*/}
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
