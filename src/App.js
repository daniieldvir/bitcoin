import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/global.scss';

import { AppHeader } from './cmps/AppHeder';
import HomePage from './pages/HomePage';
import ContactEdit from './pages/ContactEdit';
import ContactDetails from './pages/ContactDetails';
import ContactPage from './pages/ContactPage';
import StatisticPage from './pages/StatisticPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main className="container">
          <Switch>
            <Route component={ContactEdit} path="/contact/edit/:id?" />
            <Route component={ContactDetails} path="/contact/:id" />
            <Route component={ContactPage} path="/contacts" />
            <Route component={StatisticPage} path={'/statistics'} />
            <Route component={SignupPage} path={'/login'} />
            <Route component={HomePage} path="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
