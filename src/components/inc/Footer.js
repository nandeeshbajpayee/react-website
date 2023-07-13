import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Office Address</h5>
                            <p style={{ color: 'white' }}>
                                123 Street, City<br />
                                State, Country
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact</h5>
                            <p style={{ color: 'white' }}>
                                Phone: <span style={{ color: 'white' }}>123-456-7890</span><br />
                                Email: <span style={{ color: 'white' }}>info@example.com</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
