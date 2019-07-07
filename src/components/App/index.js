// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import InputField from 'src/containers/inputField';
import CountTodos from 'src/containers/CountTodos';
// import List from 'src/components/List';

// == Composant
const App = () => (
  <div id="app">
    <InputField />
    <CountTodos />
    {/* <List /> */}
  </div>
);

// == Export
export default App;
