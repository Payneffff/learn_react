/*
 * @Descripttion: 
 * @version: 
 * @Author: liupf
 * @Date: 2020-12-15 22:01:02
 * @LastEditors: liupf
 * @LastEditTime: 2020-12-15 22:24:18
 */
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './views/Login';
import Layout from './views/Layout'
import NoMatch from './views/NoMatch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='/index'>
            <Layout></Layout>
          </Route>
          <Redirect from="/*" to="/login" />
          <Route path='/*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

