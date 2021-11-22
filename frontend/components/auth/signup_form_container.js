import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    user: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    },
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);