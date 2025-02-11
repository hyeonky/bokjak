import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './getThunk';

const initialState = {
    movieData: [],
    loading: true,
    error: null,
    currentData: null,
};
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.movieData = action.payload;
                state.error = null;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
            });
    },
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
