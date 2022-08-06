import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TLoginInputs } from '../../../../types/user/login';
import { fetchLoginRequest } from '../../../../pages/login/fetchRequest';
import { incrementAsync } from '../../../../features/counter/counterSlice';


const initialState = {
    status: false
}

export const userAsyncLogin = createAsyncThunk(
    'user/login',
    async (formData: TLoginInputs) => {
        const response = await fetchLoginRequest(formData);
        console.log(response, formData);

        return response;
    }
)


export const userLoginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = true
            })
    }
});

export default userLoginSlice.reducer;