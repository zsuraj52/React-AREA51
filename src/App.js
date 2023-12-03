import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/landingPage';
import Menu from './components/pages/menu';
import Registration from './components/pages/signup';
import Login from './components/pages/login';
import About from './components/pages/about';
import BookATable from './components/pages/bookATable';
import OurStory from './components/pages/ourStory';

function App() {
	return (
		<div className='bg-warning'>
			<Routes>
				<Route path= "/" element={<LandingPage />}></Route>
				<Route path= "menu" exact element={<Menu />}></Route>
				<Route path= "register" exact element = {<Registration/>}></Route>
				<Route path= "login" exact element = {<Login/>}></Route>
				<Route path= "about" exact element = {<About/>}></Route>
				<Route path= "/book-a-table" exact element = {<BookATable/>}></Route>
				<Route path= "/story" exact element = {<OurStory/>}></Route>

			</Routes>
		</div>
	);
}

export default App;
