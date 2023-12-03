import React from "react";
import 'material-icons/iconfont/material-icons.css';
import NavBar from './navBar';
import HomePageOffer from "./homepage.offer";
import Footer from "./footer";
import MainPageCarousal from "./mainPageCarousal";
import MainPageBookATable from "./mainPageBookTable";
import '../styles/headers.css';
import { Link } from "react-router-dom";



const LandingPage = () => {

    return (
        <div>
            <div className="body">
                <NavBar />
                <div className="bg-box">
                    <img className="img-fluid bg-img image " src="/bg1.jpg" alt="" ></img>
                </div>
                <div className="textOnImage">
                    <h3 className="area text-dark"> Area 51</h3>
                    <h4 className="text-warning fresh">O N E - S T O P</h4>
                    <h4 className="text-danger area"> D E L I C I O U S </h4>
                    <h4 className="text-warning fresh"> F O O D S &nbsp;&nbsp;&nbsp; P L A C E</h4>

                    <br></br>
                    <h4 className=" text-warning text" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </h4>

                    <Link className="nav-link nav-data" to="/menu"> <button className="btn btn-warning mt-4"> Explore!</button> </Link>

                </div>
                < HomePageOffer />

                <MainPageCarousal />


                <MainPageBookATable />


                <Footer />
            </div>
        </div>
    );

}

export default LandingPage;