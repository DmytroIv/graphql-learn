import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { isLoggedIn, logout } from './auth';
import CompanyDetail from './CompanyDetail';
import LoginForm from './LoginForm';
import JobBoard from './JobBoard';
import JobDetail from './JobDetail';
import JobForm from './JobForm';
import { NavBar } from './NavBar';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLogged = isLoggedIn();
    setLLoggedIn(isUserLogged);
  }, []);

  const handleLogin = () => {
    setLLoggedIn(true);
    history.push('/');
  };

  const handleLogout = () => {
    logout();
    setLLoggedIn(false);
    history.push('/');
  };

  return (
      <>
        <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={JobBoard} />
              <Route path="/companies/:companyId" component={CompanyDetail} />
              <Route exact path="/jobs/new" component={JobForm} />
              <Route path="/jobs/:jobId" component={JobDetail} />
              <Route exact path="/login" render={() => <LoginForm onLogin={handleLogin} />} />
            </Switch>
          </div>
        </section>
      </>
  );
};

export default App;