import React from 'react';
import AuthInput from './auth_input';
import {
  validateTextInput,
  validateEmailInput,
  validatePasswordInput
} from '../../utils/components/inputs/auth_input_validators';

export default class SigninInputs extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const update = this.props.update;
    return (
      <>
        <AuthInput 
          id='emailOrUsername'
          className="auth input"
          type='text'
          label='Email or Username'
          _ref={this.inputEl}
          onChange={ update(['username'], inputEl => {
            validateTextInput(inputEl, 3);
            if (inputEl.value.includes('@')) 
              validateEmailInput(inputEl);
          })}
        />
        <AuthInput 
          id='password'
          className="auth input"
          type='password'
          label='Password'
          _ref={this.inputEl}
          onChange={update(['password'], inputEl => {
            validatePasswordInput(inputEl);
          })}
        />
        <div className='auth form-submit'>
          <button 
            className='demo-button'
            onClick={e => {
              e.preventDefault();
              this.props.signin({username: 'demo', password: 'password'})
            }}
          >
            Demo
          </button>
          <button>{this.props.formType}</button>
        </div>
      </>
    )
  }
}