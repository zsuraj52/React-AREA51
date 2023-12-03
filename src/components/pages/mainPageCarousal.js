import Carousel from 'react-bootstrap/Carousel';
import '../styles/mainPageCarousal.css';

function MainPageCarousal(){
    return(
        <div className="container Carheight">
                    <h2 className="text-center text-dark">Inside Glimpse Of AREA 51</h2>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="/carousal/photo-1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 img"
                                src="/carousal/photo-2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="/carousal/photo-3.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="/carousal/photo-4.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 "
                                src="/carousal/photo-5.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src="/carousal/photo-6.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
    )
};

export default MainPageCarousal;