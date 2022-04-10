// import { Link } from 'react-router-dom';
// export default function Navigation () {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link> </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul> <li>
        <Link to="/">Products</Link> </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li> <li>
          <Link to="/userProfile">Profile</Link> </li>
      </ul> </nav>
  );
}
