import React from 'react';
import { Route } from 'react-router';
import App from './App.js';
import SplashView from './Splash/SplashView';
import UserView from './';
import Content from './Main/Content/Content';
import Collection from './Main/Content/Images/Collection/Collection';
import Image from './Main/Content/Images/Image/Image';


export default (
  <Route path="/" component={App}>
    <Route path="splash" component={SplashView} />
    <Route path="user" component={UserView}>
      <Route path="content" component={Content}>
        <Route path="collection" component={Collection} />
        <Route path="image" component={Image} />
      </Route>
    </Route>
  </Route>
);
