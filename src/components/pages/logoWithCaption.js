import '../styles/logoWithCaption.css';

function LogoWithCaption() {
    return (
        <div>
            <div className='mt-5'>
                <div className='container'>
                    <div class="row ">
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
                                <button className='btn btn-dark'> Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoWithCaption;