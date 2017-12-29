'use strict';

import {
  CATEGORIES_EAT, CATEGORIES_DRINK
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_EAT:
      return [
        {name:'Meat', icon:'fish'},
        {name:'Fish', icon:'fish'},
        {name:'BBQ', icon:'fish'},
        {name:'Take Away', icon:'fish'},
        {name:'Tapas', icon:'fish'},
        {name:'Brunch', icon:'fish'}];
    case CATEGORIES_DRINK:
      return [
        {name:'Coffe&Te', icon:'fire'},
        {name:'Smoothie', icon:'fire'},
        {name:'Milkshakes', icon:'fire'},
        {name:'Vermouth', icon:'fire'},
        {name:'Cocktails', icon:'fire'},
        {name:'Drinks', icon:'fire'}];
    default:
      return state;
  }
};