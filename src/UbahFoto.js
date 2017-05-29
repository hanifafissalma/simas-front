import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
class UbahFoto extends Component{
  constructor(){
    super();
    this.state={
      open:false
    }
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleSubmit(e){
    e.preventDefault();

  }

  render(){
    const actions = [
      <FlatButton
        label="Batal"
        default={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Simpan"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
    return(
      <div>
       <RaisedButton label="UBAH FOTO" backgroundColor="#FB8C00" onTouchTap={this.handleOpen} />
       <Dialog
         title="Ubah Foto"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
        bla bla bla
       </Dialog>
     </div>
    )
  }
}
export default UbahFoto;
