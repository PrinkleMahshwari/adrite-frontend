import { Link } from "react-router-dom";
import Button from "./Button";

// reusable navbar (Adrite agency style)
// hero ke upar floating navbar jaisa look hoga

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      
      <div className="container-custom flex items-center justify-between">

        {/* logo section */}
        <div className="text-white font-heading text-2xl font-bold">
          adrite
        </div>

        {/* middle links */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          <li className="hover:text-accent transition">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-accent transition">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="hover:text-accent transition">
            <Link to="/services">SERIVCE</Link>
          </li>
          <li className="hover:text-accent transition">
            <Link to="/resources">RESOURCES</Link>
          </li>
          <li className="hover:text-accent transition">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        {/* right side button */}
        <Button text="Log In" variant="primary" />

      </div>
    </nav>
  );
}

export default Navbar;