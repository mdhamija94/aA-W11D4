import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clearErrors();
  }

  render() {
    const display = this.props.currentUser ? (
      <div>
        <h2>Welcome, {this.props.currentUser.username}!</h2>
        <button onClick={this.props.logout}>
          <Link to="/login">Log Out</Link>
        </button>
      </div>
    ) : (
      <div>
        <button onClick={this.handleClick}>
          <Link to="/signup">Sign Up</Link>
        </button>
        <button onClick={this.handleClick}>
          <Link to="/login">Log In</Link>
        </button>
      </div>
    )
  
    return (
      <div>{ display }</div>
    )
  }
}

export default Greeting;