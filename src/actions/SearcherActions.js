'use strict';

import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { SEARCH_BY_VENUE } from './types';
import { token } from '../../assets/token';

export const searchByValue = (value, {latitude, longitude}) => {
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${token.client_id}&client_secret=${token.clientSecret}&v=20130815&ll=${latitude},${longitude}&radius=3000&section=&limit=10&query=${value}`
    
    return (dispatch) => {
        axios.get(url)
        .then(data => {
            console.log(data)
            Actions.categories()
        })
        .catch(e => {
            console.log(e)
            Actions.categories()
        })
    }    
}