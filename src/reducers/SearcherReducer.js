'use strict';

import {
    SEARCH_BY_VENUE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_BY_VENUE:
      return { action }
    default:
      return state;
  }
};