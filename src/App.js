// import './App.css';
// import Navigation from "./Navigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// const Home = () => <h1>Hi from the home page!</h1>;
//   const About = () => <h1>Hi from about!</h1>;
//
// function App() {
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
//
// export default App;

import React from "react";
import './Mock.server'
import RoutesFor from './Routes';
function App() {
  return (
    <RoutesFor />
  );
}
export default App;
