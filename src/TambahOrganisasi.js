import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class TambahOrganisasi extends Component{
  constructor(){
    super();
    this.state={
      open:false,
      jenis_organisasi:1,
      jenjang_organisasi:1
    }
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleJenisOrganisasiChange=this.handleJenisOrganisasiChange.bind(this);
    this.handleJenjangOrganisasiChange=this.handleJenjangOrganisasiChange.bind(this);
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

  handleJenisOrganisasiChange(event,index,value){
    this.setState({jenis_organisasi:value});
  }
  handleJenjangOrganisasiChange(event,index,value){
    this.setState({jenjang_organisasi:value});
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
        onTouchTap={this.handleSubmit}
      />,
    ];
    return(
      <div>
       <RaisedButton label="TAMBAH DATA ORGANISASI" primary={true} style={{width:'300px',marginTop:'10px'}} onTouchTap={this.handleOpen} />
       <Dialog
         title="Tambah Data Organisasi"
         actions={actions}
         modal={false}
         open={this.state.open}
         autoScrollBodyContent={true}
       >
        <form id="form_ubah_biodata">
          <TextField
            style={{width:'100%'}}
            name="nama_organisasi"
            type="text"
            required="required"
            floatingLabelText="Nama Organisasi"
          />
          <SelectField
              style={{width:'100%'}}
              value={this.state.jenis_organisasi}
              onChange={this.handleJenisOrganisasiChange}
              floatingLabelText="Jenis Organisasi"
              floatingLabelFixed={true}
              hintText="Pilih Jenis Organisasi"
              name="jenis_organisasi"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Jenis Organisasi--" />
              <MenuItem value={2} primaryText="ORMAWA" />
              <MenuItem value={3} primaryText="OPMAWA" />
          </SelectField>
          <SelectField
              style={{width:'100%'}}
              value={this.state.jenjang_organisasi}
              onChange={this.handleJenjangOrganisasiChange}
              floatingLabelText="Jenjang Organisasi"
              floatingLabelFixed={true}
              hintText="Pilih Jenjang Organisasi"
              name="jenjang_organisasi"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Jenjang Organisasi--" />
              <MenuItem value={2} primaryText="Program Studi" />
              <MenuItem value={3} primaryText="Fakultas" />
              <MenuItem value={4} primaryText="Universitas" />
          </SelectField>
          <TextField
            style={{width:'100%'}}
            name="jabatan"
            type="text"
            required="required"
            floatingLabelText="Posisi / Jabatan"/>
          <TextField
            style={{width:'100%'}}
            name="deskripsi"
            type="text"
            required="required"
            floatingLabelText="Deskripsi"
          />
          <RaisedButton
            style={{width:'35%'}}
            containerElement='label'
          >
            <input type="file" />
          </RaisedButton>
            
        </form>
       </Dialog>
     </div>
    )
  }
}
export default TambahOrganisasi;
