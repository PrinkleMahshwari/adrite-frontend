import { Link } from "react-router-dom";

import Button from "./Button";

// reusable navbar
// public navigation + auth navigation

function Navbar() {

  return (

    <nav className="absolute top-0 left-0 w-full z-50 py-6">

      <div className="container-custom flex items-center justify-between">

        {/* logo */}

        <Link
          to="/"
          className="text-white font-heading text-2xl font-bold"
        >
          adrite
        </Link>

        {/* nav links */}

        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <li className="hover:text-accent transition">
            <Link to="/">HOME</Link>
          </li>

          <li className="hover:text-accent transition">
            <Link to="/about">ABOUT</Link>
          </li>

          <li className="hover:text-accent transition">
            <Link to="/services">SERVICES</Link>
          </li>

          <li className="hover:text-accent transition">
            <Link to="/resources">RESOURCES</Link>
          </li>

          <li className="hover:text-accent transition">
            <Link to="/contact">CONTACT</Link>
          </li>

        </ul>

        {/* auth buttons */}

        <div className="flex items-center gap-4">

          <Link to="/login">

            <Button
              text="Login"
              variant="outline"
            />

          </Link>

          <Link to="/register">

            <Button
              text="Register"
              variant="primary"
            />

          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;