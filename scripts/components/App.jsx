import React from 'react';

import WpDoneHeader from './WpDoneHeader.jsx';
import WpDoneTodoList from './WpDoneTodoList.jsx';
import WpDoneFooter from './WpDoneFooter.jsx';
export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <WpDoneHeader />
        <WpDoneTodoList/>
        <WpDoneFooter />
      </div>);
  }
}
