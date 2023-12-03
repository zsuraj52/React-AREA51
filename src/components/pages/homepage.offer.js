import '../styles/homepage.offer.css';
import LandingPageSubMenu from './landingPage-subMenu';
import LogoWithCaption from './logoWithCaption';

function HomePageOffer() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <h1 className='text-center mt-2'>Today's Special</h1>
                    <div className='col-md-4 bg-light mb-5 hover'>
                        <div className='box d-flex'>
                            <div className='offerImage'>
                                <img className="offerimg" src='/offer1.jpg' alt=""></img>
                            </div>
                            <div className='detail-box text-center mt-5'>
                                <h5> Sunday Brunch</h5>
                                <h6>
                                    <span> 20%</span> "OFF"
                                </h6>
                                <button className='btn btn-warning'> order now <span><i class="fa-solid fa-cart-shopping-fast"></i></span></button>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-4 bg-light mb-5 hover'>
                        <div className='box d-flex'>
                            <div className='offerImage'>
                                <img className="offerimg" src='/offer2.jpg' alt=""></img>
                            </div>
                            <div className='detail-box text-center mt-5'>
                                <h5> Sunday Brunch</h5>
                                <h6>
                                    <span> 20%</span> "OFF"
                                </h6>
                                <button className='btn btn-warning'> order now <span><i class="fa-solid fa-cart-shopping-fast"></i></span></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 bg-light mb-5 hover '>
                        <div className='box d-flex'>
                            <div className='offerImage'>
                                <img className="offerimg" src='/offer1.jpg' alt=""></img>
                            </div>
                            <div className='detail-box text-center mt-5'>
                                <h5> Sunday Brunch</h5>
                                <h6>
                                    <span> 20%</span> "OFF"
                                </h6>
                                <button className='btn btn-warning'> order now </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='container mt-5 mt-5'>
                    <div className='text-center mt-4 mb-4'>
                        <h2> Our Menu</h2>
                    </div>
                    <div className='container'>
                        <LandingPageSubMenu />
                    </div>
                </div>
                {/* <div className='container about mt-5'>
                    <div class="row mt-4">
                        <div class="col-md-6 ">
                            <div className='register-img'>
                                <img src="/register-img.png" alt="logo"></img>
                            </div>
                        </div>
                        <div class="col-md-5 d-flex flex-column justify-content-center align-items-center me-4">
                            <div class="detail-box">
                                <div class="heading_container">
                                    <h2>
                                        We Are AREA 51
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                    the middle of text. All
                                </p>
                                <button className='btn btn-warning'> Read More</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <LogoWithCaption />
            </div>
        </div>
    )
}

export default HomePageOffer;