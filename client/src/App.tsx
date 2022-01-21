import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import {
    ApolloProvider,
} from '@apollo/client';
import graphqlClient from './services/graphqlClient';

import store from './store';

import RestaurantsList from './components/restaurantsList';

function App() {
    return (
        <ApolloProvider client={graphqlClient}>
            <Provider store={store}>
                <div className="App">
                    <h1>Simple GraphQL / Redux app</h1>
                    <RestaurantsList />
                </div>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
