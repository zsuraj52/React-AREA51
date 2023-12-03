import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../styles/navBar.css'

function NavBar() {

    const [show, setShow] = useState(false);
    const [ setShowRegisterForm] = useState(false);
    const [ setShowLoginForm] = useState(false);

    // const handleLoginFormClose = () => setShowLoginForm(false);
    const handleLoginFormShow = () => setShowLoginForm(true);


    // const handleRegisterFormClose = () => setShowRegisterForm(false);
    const handleRegisterFormShow = () => setShowRegisterForm(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="bg-darks">
            <header>
                <div className="bg-transparent">
                    <nav className="navbar navbar-expand-lg custom_nav-container bg-transparent">
                        <Link className="text-decoration-none ms-5" to='/'><a className="navbar-brand"> <span> Area 51 </span> </a></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className=""> </span></button>

                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">

                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link nav-data" to="/"> Home </Link><span className="sr-only">(current)</span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-data" to="/menu"> Menu </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-data" to="/about"> About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-data" to="/story"> Our Story </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-data" to="/book-a-table"> Book A Table </Link>
                                </li>

                            </ul>
                            <div className="navbar-nav ms-5" >  
                                {/* <a><i className="fa-solid fa-magnifying-glass nav-data me-4"></i></a> */}
                                <a onClick={handleShow} data-bs-toggle="offcanvas" aria-controls="offcanvasStart" ><i className="fa-solid fa-user nav-data me-4"></i></a>
                                <a><i className="fa-sharp fa-solid fa-cart-shopping nav-data me-4"></i></a>
                            </div>
                            <button className="btn btn-warning"><a href="" className="order_online">Order Online</a></button>

                        </div>
                    </nav>

                </div>
            </header>


            <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-warning">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <header>
                            <div className="navbar-brand">
                                <h3>AREA 51</h3>
                            </div>
                            <br></br>
                            <div className="">
                                <p>One Stop Delicious Food Stop.....</p>
                                <hr></hr>
                            </div>
                        </header>
                        <main className="bg-warning">
                            <div className="">
                                <Link to='/register'><button onClick={handleRegisterFormShow} className="btn btn-dark text-warning me-3"> Register</button></Link>
                                <Link to='/login'><button onClick={handleLoginFormShow} className="btn btn-dark text-warning"> Log in</button></Link>
                            </div>
                        </main>
                        <div className="footer">
                            <hr></hr>
                            <p className="navbar-brand ">Follow Us On Social Media</p>
                            <div className="">
                                <a className="text-dark me-5"><i class="fa-brands fa-instagram"></i></a>
                                <a className="text-dark me-5"><i class="fa-brands fa-facebook-f"></i></a>
                                <a className="text-dark me-5"><i class="fa-brands fa-twitter"></i></a>
                                <a className="text-dark"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default NavBar;