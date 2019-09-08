import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // renderErrors() {
  //   debugger
  //   return (
  //     <ul>
  //       <li>{this.props.errors}</li>
  //     </ul>
  //   )
  // }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          {this.props.errors}
          <label>Username
              <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Password
              <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>
            <a href="">Log In</a>
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm;