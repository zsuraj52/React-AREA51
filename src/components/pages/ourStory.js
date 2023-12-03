import Footer from "./footer";
import NavBar from "./navBar";
import '../styles/ourStory.css'
import StoryImages from './storyImages';
import TeamImages from "./teamImages";
import ChefImages from "./chefImages";
// import * as stories from '../images/story/story1.jpg';

function OurStory(){
    return (
        <div>
            <NavBar/>
                <div className="container bg-darks mt-5">
                    <h2 className="container storyTitle text-center text-warning  pt-5"> Our Story....</h2>
                    <hr className="text-warning"></hr>
                    <p className="container text-warning w-75 story mt-4 mb-5">
                        In 1970, an Indian Software Engineer by the name of Suraj purchased a coffee machine, a special satellite and a pool table for his new business, AREA 51 — or Open Day Night, as it is known by its regulars. </p>
                    
                    {/* <img src='story1.jpg' alt="" className="container img-fluid mb-5 w-75 d-flex jsutify-content-center"></img>
                    <img src='story2.jpg' alt="" className="container img-fluid mb-5 w-75 d-flex jsutify-content-center"></img> */}

                    <p className="container text-warning w-75 story">
                        Originally a place where Suraj and his friends could watch Indian Premier League, play Cricket and a card games</p>
                    <p className="container text-warning w-75 story">
                        it soon became a gathering place for the whole neighborhood—a place where you could enjoy a traditional Italian espresso and find respite from whatever was happening in the outside world.
                    </p>

                    <StoryImages />

                    {/* <img src='story3.webp' alt="" className="container img-fluid mb-5 w-75 d-flex jsutify-content-center"></img>
                    <img src='story4.jpg' alt="" className="container img-fluid mb-5 w-75 d-flex jsutify-content-center"></img>
                    <img src='story5.jpg' alt="" className="container img-fluid mb-5 w-75 d-flex jsutify-content-center"></img> */}

                    <br/><br/>
                    <hr className="text-warning"></hr>

                    <h2 className="storyTitle text-center bg-warning mb-5"> Our Team</h2>
                    <h3 className="storyTitle text-center text-warning mt-4 mb-5"> Founders</h3>
                    {/* <div className="row">
                        <div className="col-md-4 text-center">
                            <img src='owner.jpg' alt="owner" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Narinder Prakash </h3>
                            <p className="text-light">Founder, Owner</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src='marketing.jpg' alt="marketing" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Praveena Amardeep </h3> 
                            <p className="text-light">Co-Founder- Marketing Lead</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src='businesslead.jpg' alt="businesslead" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Isidore Yohann </h3> 
                            <p className="text-light">Co-Founder- Technical Lead</p>
                        </div>
                    </div> */}
                    <TeamImages />

                    <h3 className="storyTitle text-center text-warning mt-4 mb-5"> Chefs</h3>
                    {/* <div className="row">
                        <div className="col-md-4 text-center">
                            <img src='chef1.jpg' alt="chef1" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Bernard Strzyżewski </h3>
                            <p className="text-light">Chef- Fast Food specialist</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src='chef2.jpg' alt="chef2" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Praveena Amardeep </h3> 
                            <p className="text-light">Chef- Italian specialist</p>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src='chef3.jpg' alt="chef3" className="container img-fluid"></img>
                            <h3 className="text-light mt-3"> Isidore Yohann </h3> 
                            <p className="text-light">Chef- Bakery specialist</p>
                        </div>
                    </div> */}
                    <ChefImages />

                </div>
            <Footer/>
        </div>
    )
}

export default OurStory;