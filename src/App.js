import React, { Component } from 'react';
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
import Wrapper from './containers/Wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Wrapper />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
