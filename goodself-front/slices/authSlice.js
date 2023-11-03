import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    userInfo: null,
    initialLoad: true
};


export const loadUserFromAsyncStorage = createAsyncThunk(
    "auth/loadUserFromAsyncStorage",
    async () => {
        try {
            const userInfo = await AsyncStorage.getItem('userInfo');
            return userInfo ? JSON.parse(userInfo) : null;
        } catch (error) {
            throw error;
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
                .then(() => console.log('User Logged IN and Info Saved to Aysnc Storage'))
                .catch(error => console.log('Error saving user info to AsyncStorage:', error));
        },
        logout: (state, action) => {
            state.userInfo = null;
            AsyncStorage.removeItem('userInfo')
                .then(() => console.log('User logged out and info removed from AsyncStorage'))
                .catch(error => console.log('Error removing user info from AsyncStorage:', error));
        },

    },
    extraReducers: (builder) => {
        builder.addCase(loadUserFromAsyncStorage.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.initialLoad = false
        });
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
