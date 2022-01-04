import React from "react";
import { Route } from "react-router";
import TransactionFormContainer from "./forms/transaction_form_container";
import MyTransactionsIndex from "./transactions/my_transactions_index_container";
import IncompleteTransactionsIndex from "./transactions/incomplete_transactions_index_container";

export default function MainView(props) {
  return (
    <div className='main-view'>
      <Route 
        path='/account/transaction' 
        render={ props => <TransactionFormContainer {...props}/> }
      />
      <Route
        exact
        path='/account'
        render={ props => <MyTransactionsIndex {...props} /> }
      />
      <Route
        exact
        path='/account/incomplete'
        render={props => <IncompleteTransactionsIndex {...props} />}
      />
    </div>
  );
}