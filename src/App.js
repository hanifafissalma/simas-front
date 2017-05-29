import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
}
export default App;
