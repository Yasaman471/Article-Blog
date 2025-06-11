import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import theme from './mui/theme';

import App from './App';
import './Styles/index.css';
import "./Styles/fonts.css";


const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cma5bvoyi016q06w8ze6zpduv/master',
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </ApolloProvider>
);
