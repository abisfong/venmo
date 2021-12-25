import React from 'react';
import AuthInput from './auth_input';
import { 
  validateTextInput,
  validateEmailInput,
  validatePasswordInput
} from '../../utils/auth_input_validators';

export default function SignupInputs(props) {
  const update = props.update;
  return (
    <>
      <AuthInput
        id='first-name'
        className="auth input"
        type='text'
        label="First Name"
        onChange={update(['first_name'], inputEl => {
          validateTextInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='last-name'
        className="auth input"
        type='text'
        label="Last Name"
        onChange={update(['last_name'], inputEl => {
          validateTextInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='username'
        className="auth input"
        type='text'
        label="Username"
        onChange={update(['username'], inputEl => {
          validateTextInput(inputEl, 3);
        })}
      />
      <AuthInput
        id='email'
        className="auth input"
        type='text'
        label="Email"
        onChange={update(['email'], inputEl => {
          validateEmailInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='password'
        className="auth input"
        type='password'
        label="Password"
        onChange={update(['password'], inputEl => {
          validatePasswordInput(inputEl);
        })}
      />
      <AuthInput
        id='confirm-password'
        className="auth input"
        type='password'
        label="Confirm Password"
        onChange={update(['confirm_password'], inputEl => {
          validatePasswordInput(inputEl);
        })}
      />
      <div className="auth form-submit">
        <button>{props.formType}</button>
      </div>
    </>
  )
}