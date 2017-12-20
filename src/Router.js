'use strict';

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Food from './components/food/Food';

const RouterComponent = () => (
    <Router>
      <Scene hideNavBar>
        <Scene key="food">
          <Scene key="food" component={Food} title="Food" />
        </Scene>
        {/* <Scene key="drink">
          <Scene key="drink" component={} title="Drink" />
        </Scene> */}
      </Scene>
    </Router>
  );
  export default RouterComponent;