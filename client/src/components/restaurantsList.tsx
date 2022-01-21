import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { loadRestaurants } from '../restaurants/restaurantsSlice';

function RestaurantsList(): React.ReactElement {
    const restaurants = useAppSelector((state) => state.restaurants);

    const dispatch = useAppDispatch();

    const handleLoadRestaurants = () => {
        dispatch(
            loadRestaurants(),
        );
    };

    return (
        <div>
            <button onClick={() => handleLoadRestaurants()}>Load</button>
            <span>Restaurants list</span>
            {
                restaurants.map((restaurant, index) => <span key={index}>{restaurant.name}</span>)
            }

        </div>
    );
}

export default RestaurantsList;
