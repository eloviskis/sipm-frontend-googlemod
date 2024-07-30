import { createSlice } from '@reduxjs/toolkit';
import axios from '../axiosConfig';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch(setUser(response.data.user));
    dispatch(setToken(response.data.token));
  } catch (error) {
    console.error(error);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth/check-auth');
    dispatch(setUser(response.data.user));
  } catch (error) {
    console.error(error);
  }
};

export default authSlice.reducer;
