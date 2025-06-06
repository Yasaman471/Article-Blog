import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cma5bvoyi016q06w8ze6zpduv/master',
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
