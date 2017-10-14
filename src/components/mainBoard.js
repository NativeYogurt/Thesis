import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from './Dashboard';
import Resume from './resume';
import Resources from './Resources';
import Profile from './profile';

function Main(props) {
  return (
    <div>
      <Switch>
        <Route path="/home/resume" render={() => (<Resume userId={props.userId} />)} />
        <Route path="/home/resources" render={() => (<Resources userId={props.userId} />)} />
        <Route path="/home/profile" render={() => (<Profile userId={props.userId} />)} />
        <Route render={() => (<Dashboard userId={props.userId} />)} />
      </Switch>
    </div>
  );
}
Main.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default Main;
