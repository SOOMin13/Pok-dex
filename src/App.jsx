import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	useEffect(() => {
		const array = Array(151)
			.fill(0)
			.map((value, index) => index + 1);
		console.log(array);
		const pokemonApi = async () => {
			const response = await fetch(
				'https://pokeapi.co/api/v2/pokemon?limit=151'
			);
			const data = await response.json();
		};
	});
}

export default App;
