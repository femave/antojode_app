'use strict';

import { Actions } from 'react-native-router-flux';
import { CATEGORIES_BUTTONS } from './types';

export const categories = ({ prop, value }) => {
    return {
        type: CATEGORIES_BUTTONS,
        payload: { prop, value }
      };
}