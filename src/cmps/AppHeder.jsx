import { NavLink, withRouter } from 'react-router-dom';

function _AppHeader(props) {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">BITCoin</h1>

        <nav>
          <NavLink activeClassName="my-active" exact to="/login">
            Login
          </NavLink>
          <NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="my-active" to="/contacts">
            Contacts
          </NavLink>
          <NavLink activeClassName="my-active" to="/statistics">
            Statistics
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);
