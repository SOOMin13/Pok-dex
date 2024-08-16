import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const pokemonApi = (createAsyncThunk =
	('pokemon/pokemonList',
	async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
		const data = await response.json();
		return data.results;
	}));

const initialState = {
	list: [],
	loading: 'idle',
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers:
		// 비동기 작업이기 때문에 동기작업에 쓰는 reducers는 등록하지 않음.
		{},
	extraReducers: (builder) => {
		builder.addCase(pokemonApi.pending, (state) => {
			state.loading = 'pending';
		});
		builder.addCase(pokemonApi.fulfilled, (state, action) => {
			state.loading = 'succeeded';
			state.list = [...list, action.payload];
		});
		builder.addCase(pokemonApi.rejected, (state) => {
			state.loading = 'failed';
		});
	},
});

const store = configureStore({
	reducer: {
		pokemon: pokemonSlice.reducer,
	},
});

export default store;
