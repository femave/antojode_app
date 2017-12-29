'use strict';

import { Actions } from 'react-native-router-flux';
import { CATEGORIES_EAT, CATEGORIES_DRINK } from './types';

export const categorieEat = ({ value }) => {
    return {
        type: CATEGORIES_EAT,
        payload: { value }
      };
}

export const categorieDrink = ({ value }) => {
    return {
        type: CATEGORIES_DRINK,
        payload: { value }
      };
}