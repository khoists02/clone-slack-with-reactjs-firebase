import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Lazy load - Code splitting
const Chat = React.lazy(() => import('./features/chat'));
const NotFound = ()=>  (<div>Not found</div>)


// Configure Firebase

// 

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          {/* Header */}
          <Header></Header>
          
          <div className='app__body'>
            {/* Sidebar */}
            <Sidebar />
            {/* React router -> Chat screen */}
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/chat-rooms" component={Chat} />
              <Route component={NotFound} />
            </Switch>
          </div>
          </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
