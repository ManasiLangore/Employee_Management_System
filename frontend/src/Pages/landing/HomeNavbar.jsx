
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import '../../navbar.css'

export default function HomeNavbar() {

    let Navigate = useNavigate();

    return (
        <div>

            <nav
                className="navbar navbar-expand-lg bg-white shadow-sm"
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    zIndex: "1000"
                }}
            >

                <div className="container-fluid px-4">

                    {/* EMS Logo */}
                    <a
                        className="navbar-brand fw-bold text-primary fs-3"
                        href="#"
                    >
                        EMS
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >

                        {/* Navigation Links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active fs-5 px-3"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/aboutus"
                                    className="nav-link fs-5 px-3"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/contactus"
                                    className="nav-link fs-5 px-3"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/service"
                                    className="nav-link fs-5 px-3"
                                >
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-2">
                                <button
                                    className="btn btn-primary fs-5 px-4"
                                    onClick={() => {
                                        Navigate("/register")
                                    }}
                                >
                                    Sign in
                                </button>
                            </li>

                        </ul>

                        {/* Search */}
                        <form className="d-flex">
                            <input
                                className="form-control me-2 fs-6"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <button
                                className="btn btn-outline-primary fs-6 px-3"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>

                    </div>
                </div>
            </nav>

            {/* Space for fixed navbar */}
            <div style={{ height: "78px" }}></div>

        </div>
    )
}
