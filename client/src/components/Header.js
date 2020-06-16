import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.authReducer) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log Out</a>
          </li>
        );
    }
  }

  // const loginStatus =
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            <a>{this.renderContent()}</a>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  return { authReducer };
};

export default connect(mapStateToProps)(Header);
