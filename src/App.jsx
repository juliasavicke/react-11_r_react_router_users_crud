import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Switch>
        <Route path={'/users/:userId'}>
          <SingleUserPage />
        </Route>
        <Route path={'/users'}>
          <UsersPage />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
