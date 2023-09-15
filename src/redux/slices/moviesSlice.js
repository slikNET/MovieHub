import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    moviesList: {},
    movieSingle: {},
    isLoading: true
}


const betByPage = createAsyncThunk(
    'moviesSlice/betByPage',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.betByPage(page);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await movieService.betById(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        resetSingleMovie(state){
            state.movieSingle = {}
        }
    },
    extraReducers: {
        [betByPage.fulfilled]: (state, action) => {
            state.moviesList = action.payload
            state.isLoading = false
        },
        [betByPage.pending]: (state, action) => {
            state.isLoading = true
        },
        [betByPage.rejected]: (state, action) => {
            state.isLoading = false
        },

        [getById.fulfilled]: (state, action) => {
            state.movieSingle = action.payload
            state.isLoading = false
        },
        [getById.pending]: (state, action) => {
            state.isLoading = true
        },
        [getById.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})

const {actions, reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    betByPage,
    getById,
    ...actions
}

export {
    moviesActions,
    moviesReducer
}