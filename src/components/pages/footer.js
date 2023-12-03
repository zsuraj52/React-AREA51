import '../styles/footer.css'

function Footer() {
    return (
        <div className='footerClass'>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer_contact">
                            <h4>
                                Contact Us
                            </h4>
                            <div class="contact_link_box d-flex flex-column justify-content-center">
                                <a href="" className='text-decoration-none text-light'>
                                    <span>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </span> &nbsp;
                                    Location
                                </a>
                                <a href="" className='text-decoration-none text-light' >
                                    <span>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                    </span>
                                    &nbsp;
                                    Call +01 1234567890
                                </a>
                                <a href="" className='text-decoration-none text-light'>
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                    &nbsp;
                                    demo@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <div class="footer_detail">
                            <a href="" className="footer-logo text-decoration-none text-light h1 fw-bold">
                                AREA 51
                            </a>
                            <p>
                                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                            </p>
                            <div class="footer_social">
                                <a > <i className="me-4 text-decoration-none text-light fa-brands fa-instagram"></i> </a>
                                <a > <i className="me-4 text-decoration-none text-light fa-brands fa-facebook-f"></i> </a>
                                <a > <i className="me-4 text-decoration-none text-light fa-brands fa-twitter"></i> </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <h4>
                            Opening Hours
                        </h4>
                        <p>
                            Everyday
                        </p>
                        <p>
                            10.00 Am -10.00 Pm
                        </p>
                    </div>
                </div>
                <div class="footer-info d-flex flex-column justify-content-center align-items-center mt-3">
                    <p>
                        © <span id="displayYear">2023</span> All Rights Reserved By
                        <a className='text-decoration-none text-light'> &nbsp; Suraj Raosaheb Zurange</a> 
                        <br/><br/>
                        © <span id="displayYear"></span> Distributed By
                        <a className='text-decoration-none text-light' href="https://themewagon.com/" target="_blank"> &nbsp; Strivers Community!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;