import { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import Search from './pages/search';
import Favorite from './pages/favorite';

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMultiplePokemonById(151));
	}, []);

	return (
		<>
			<h1 className='text-[40px] text-center'>Pokédex</h1>
			<nav className='flex justify-center gap-[10px]'>
				<Link to={'/'}>Main</Link>
				<Link to={'/favorite'}> 🩵 Favorite 🩵</Link>
				<input
					onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
					className='w-[120px] border-b border-[darkgray] px-2'
					type='text'
				/>
				<span>🔍</span>
			</nav>
			<main className='flex justify-center flex-wrap gap-[20px] pt-[25px] '>
				<Routes>
					<Route path={'/'} element={<Main />} />
					<Route path={'/detail/:pokemonId'} element={<Detail />} />
					<Route path={'/search'} element={<Search />} />
					<Route path={'/favorite'} element={<Favorite />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
