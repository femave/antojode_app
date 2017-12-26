'use strict';

import {
  CATEGORIES_BUTTONS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_BUTTONS:
      return action.payload;
    default:
      return state;
  }
};