import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="text-bg-primary w-100 px-5 py-2 d-flex justify-content-between align-items-center position-sticky top-0 start-0">
      <h4 className="fs-2">Logo</h4>
      <ul className="w-25 d-flex justify-content-between fs-4">
        <li>
          <Link className="text-light text-decoration-none" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-light text-decoration-none" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-light text-decoration-none" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
