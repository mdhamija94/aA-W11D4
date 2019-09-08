import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';
import { clearErrors } from '../actions/error_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);