import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {green900} from 'material-ui/styles/colors';
import Body from './Body';
class Header extends Component{
  render(){
    return(
      <div>
        <AppBar
          title={<span>SIMAS UNJ</span>}
          iconElementLeft={<img src="../images/logo_unj2.png" alt=""/>}
          iconElementRight={<FlatButton label="KELUAR" />}
          style={{backgroundColor: green900}}
        />
      <Body />
      </div>
    )
  }
}

export default Header;
