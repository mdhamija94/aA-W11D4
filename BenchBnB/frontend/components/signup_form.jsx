import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return(e) => {
      this.setState( { [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       <li>{this.props.errors}</li>
  //     </ul>
  //   )
  // }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          {this.props.errors}
          <label>Username
              <input
              className="username-input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>Email
              <input
              className="email-input"
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password
              <input
              className="password-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>
            <a href="">Sign Up</a>
          </button>
        </form>
      </div>
    )
  }
}

export default SignupForm;