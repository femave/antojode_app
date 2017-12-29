'use strict';

import { Actions } from 'react-native-router-flux';
import { SEARCH_BY_VENUE } from './types';

export const searchByValue = (value, {latitude, longitude}) => {
    console.log(latitude, longitude)
    return {
        type: SEARCH_BY_VENUE,
        payload: value
    }
}