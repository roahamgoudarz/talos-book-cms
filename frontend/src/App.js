import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import categories from './Categories';
import books from './Books';
import { url } from './config/connection';
import authProvider from './authProvider';


import { Login } from './layout';



const dataProvider = crudProvider(url);
const App = () => (
  <Admin dataProvider={dataProvider}
  authProvider={authProvider}
  loginPage={Login}
  >
    <Resource name="category" {...categories} />
    <Resource name="book" {...books} />
  </Admin>
);
export default App;