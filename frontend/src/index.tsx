import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import graphqlClient from './api/graphql'

// ApolloProvider wraps our app so we have access to the graphql state

const Root = () => {
    return (
      <ApolloProvider client={graphqlClient}>
          <BrowserRouter>
            <App />
         </BrowserRouter>
      </ApolloProvider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
