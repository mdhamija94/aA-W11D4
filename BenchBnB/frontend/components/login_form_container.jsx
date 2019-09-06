import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "login"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(login(user))
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;