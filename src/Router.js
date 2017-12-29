'use strict';

import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Main from './components/Main';
import Categories from './components/Categories';


const RouterComponent = () => (
    <Router>
      <Scene hideNavBar>
        <Stack key="main">
          <Scene hideNavBar key="home" component={Main} title="Antojo De" initial />
          <Scene hideNavBar key="catgories" component={Categories} title="Antojo De" />
        </Stack>
        {/* <Scene key="drink">
          <Scene key="drink" component={} title="Drink" />
        </Scene> */}
      </Scene>
    </Router>
  );
  export default RouterComponent;