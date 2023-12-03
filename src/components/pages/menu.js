import Burger from "./burger";
import NavBar from "./navBar";
import Sandwich from "./sandwich";
import Footer from "./footer";
import Pizza from "./pizza";
function Menu (){
    return(
        <div>
            <NavBar/>
            <hr/>
            <Sandwich/>
            <hr/>
            <Burger />
            <hr/>
            <Pizza/>
            <hr/>
            <Footer/>
        </div>
    )
}

export default Menu;