import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main';

Chat.propTypes = {};

function Chat() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      {/* <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} /> */}

      {/* <Route component={NotFound} />   */}
    </Switch>
  )
}

export default Chat;

