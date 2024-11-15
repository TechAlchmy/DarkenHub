import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  signup: false,
  authenticated: false,
  name: '',
  email: '',
  password: '',
}

export const signUp = createAsyncThunk<any, any>(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_LOCAL_URL}/auth/register`, data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

export const signIn = createAsyncThunk(
  "auth/signin",
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_LOCAL_URL}/auth/login`, data);
      if (response.data.success === true) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userID', response.data.user.userID);
        localStorage.setItem('userName', response.data.user.fullname);
      }
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.signup = false; // Indicate loading if needed
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.signup = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      // Handle additional logic if needed
    });
    builder.addCase(signUp.rejected, (state) => {
      state.signup = false; // Handle the rejection
    });

    builder.addCase(signIn.pending, (state) => {
      state.authenticated = false; // Indicate loading if needed
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.authenticated = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      // Handle additional logic if needed
    });
    builder.addCase(signIn.rejected, (state) => {
      state.authenticated = false; // Handle the rejection
    });
  }
})

export default authSlice.reducer;