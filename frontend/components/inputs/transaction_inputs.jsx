import React from 'react';
import Input from './input';

export default function TransactionInputs(props) {
  return (
    <>
      <Input
        id='amount'
        type='text'
        className='amount'
        onChange={props.update('amount')}
      />
      <Input
        id='to'
        type='text'
        className='to'
        onChange={props.update('to')}
      />
      <Input
        id='note'
        type='text'
        className='note'
        onChange={props.update('note')}
      />
      <div className='transaction form-submit'>
        <button>Pay</button>
        <button>Request</button>
      </div>
    </>
  )
}