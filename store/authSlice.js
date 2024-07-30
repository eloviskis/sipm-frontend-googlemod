import { createSlice } from '@reduxjs/toolkit';
import axios from '../axiosConfig';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null, // Adicionar estado de erro
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setError(state, action) {
      state.error = action.payload; // Definir erro
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null; // Limpar erro ao deslogar
    },
  },
});

export const { setUser, setToken, setError, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch(setUser(response.data.user));
    dispatch(setToken(response.data.token));
    dispatch(setError(null)); // Limpar erros anteriores ao fazer login com sucesso
  } catch (error) {
    console.error(error);
    let errorMessage = 'Erro no login. Tente novamente.';
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error; // [ARRUMAR AQUI] - Mensagem de erro específica do servidor
    }
    dispatch(setError(errorMessage));
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/auth/check-auth');
    dispatch(setUser(response.data.user));
    dispatch(setError(null)); // Limpar erros anteriores ao verificar autenticação com sucesso
  } catch (error) {
    console.error(error);
    dispatch(setError('Erro na verificação de autenticação.')); // [ARRUMAR AQUI] - Mensagem de erro específica
  }
};

export default authSlice.reducer;
