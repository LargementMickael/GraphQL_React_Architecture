import { createSlice } from '@reduxjs/toolkit';
import type { Restaurant } from './restaurant.model';

const initialState: {
    restaurants: Restaurant[],
    status: String
} = {
    status: 'NONE',
    restaurants: [],
};

export const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        loadRestaurants: (state) => {
            state.restaurants.push({
                name: 'LoadedRestaurant',
            });
        },
    },
});

export const { loadRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
