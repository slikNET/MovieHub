import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {

}


const all = createAsyncThunk(
    'genresSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);



const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [all.fulfilled]: (state, action) => {
            return action.payload
            // state.isLoading = false
        },
        [all.pending]: (state, action) => {
            // state.isLoading = true
        },
        [all.rejected]: (state, action) => {
            // state.isLoading = false
        },
    }
})

const {actions, reducer: genresReducer} = genresSlice;

const genresActions = {
    all,
    ...actions
}

export {
    genresActions,
    genresReducer
}