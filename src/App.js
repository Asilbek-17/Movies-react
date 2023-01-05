import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { TopRated } from './Pages/TopRated/TopRated';
import { Upcoming } from './Pages/Upcoming/Upcoming';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Top-Rated' element={<TopRated />} />
				<Route path='/Upcoming' element={<Upcoming />} />
			</Routes>
		</div>
	);
}
export default App;
