'use strict';

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import Categories from './components/Categories';


const RouterComponent = () => (
    <Router>
      <Scene hideNavBar>
        <Scene key="home">
          <Scene hideNavBar key="main" component={Main} title="Antojo De" initial />
          <Scene hideNavBar key="catgories" component={Categories} title="Antojo De" />
        </Scene>
        {/* <Scene key="drink">
          <Scene key="drink" component={} title="Drink" />
        </Scene> */}
      </Scene>
    </Router>
  );
  export default RouterComponent;