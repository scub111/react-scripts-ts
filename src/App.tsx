import * as React from 'react';
import './App.css';

import logo from './logo.svg';
// import { func } from 'prop-types';

class App extends React.Component {

   public render() {
      this.func();
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Welcome to React 4</h1>
            </header>
            <p className="App-intro">
               To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
         </div>
      );
   }

   public func() {
      // console.log('Hello');
      let temp = 10;
      temp++;
      return temp;
   }
}

export default App;
