import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-flexbox-grid';
class UbahDataOrangTua extends Component{
  constructor(){
    super();
    this.state = {
      open: false,
      pekerjaan_ayah:1,
      penghasilan_ayah:1,
      pekerjaan_ibu:1,
      penghasilan_ibu:1,
      provinsi:1,
      kabkota:1,
      kecamatan:1
    }
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handlePekerjaanAyahChange=this.handlePekerjaanAyahChange.bind(this);
    this.handlePenghasilanAyahChange=this.handlePenghasilanAyahChange.bind(this);
    this.handlePekerjaanIbuChange=this.handlePekerjaanIbuChange.bind(this);
    this.handlePenghasilanIbuChange=this.handlePenghasilanIbuChange.bind(this);
    this.handleProvinsiChange=this.handleProvinsiChange.bind(this);
    this.handleKabkotaChange=this.handleKabkotaChange.bind(this);
    this.handleKecamatanChange=this.handleKecamatanChange.bind(this);
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
  handlePekerjaanAyahChange(event, index, value){
    this.setState({pekerjaan_ayah:value});
  }
  handlePenghasilanAyahChange(event, index, value){
    this.setState({penghasilan_ayah:value});
  }
  handlePekerjaanIbuChange(event, index, value){
    this.setState({pekerjaan_ibu:value});
  }
  handlePenghasilanIbuChange(event, index, value){
    this.setState({penghasilan_ibu:value});
  }
  handleProvinsiChange(event, index, value){
    this.setState({provinsi:value});
  }
  handleKabkotaChange(event, index, value){
    this.setState({kabkota:value});
  }
  handleKecamatanChange(event, index, value){
    this.setState({kecamatan:value});
  }
  render(){
    const actions = [
      <FlatButton
        label="Kembali"
        default={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Simpan"
        type="submit"
        primary={true}
        form="form_ubah_biodata"
        onTouchTap={this.handleSubmit}
      />
    ];
    return(
      <div>
        <RaisedButton label="UBAH DATA ORANG TUA" backgroundColor="#FB8C00" style={{width:'300px',marginTop:'10px'}} onTouchTap={this.handleOpen} />
        <Dialog
          title="Ubah Data Orang Tua"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <form id="form_ubah_biodata" onSubmit={this.handleSubmit}>
            <h4>Data Ayah</h4>
            <TextField
              style={{width:'100%'}}
              name="nama_ayah"
              required="required"
              floatingLabelText="Nama Ayah"
            />
            <Row>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="no_identitas_ayah"
                  type="number"
                  required="required"
                  floatingLabelText="No. KTP/SIM/Paspor Ayah"
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="no_telpon_ayah"
                  type="number"
                  required="required"
                  floatingLabelText="No. Telepon / HP Ayah"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.pekerjaan_ayah}
                  onChange={this.handlePekerjaanAyahChange}
                  floatingLabelText="Pekerjaan Ayah"
                  floatingLabelFixed={true}
                  hintText="Pilih Pekerjaan Ayah"
                  name="pekerjaan_ayah"
                  required="required"
                >
                  <MenuItem value={1} primaryText="--Pilih Pekerjaan Ayah--" />
                  <MenuItem value={2} primaryText="Laki-laki" />
                  <MenuItem value={3} primaryText="Perempuan" />
                </SelectField>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.penghasilan_ayah}
                  onChange={this.handlePenghasilanAyahChange}
                  floatingLabelText="Penghasilan Ayah"
                  floatingLabelFixed={true}
                  hintText="Pilih Penghasilan Ayah"
                  name="penghasilan_ayah"
                  required="required"
                >
                  <MenuItem value={1} primaryText="--Pilih Penghasilan Ayah--" />
                  <MenuItem value={2} primaryText="Laki-laki" />
                  <MenuItem value={3} primaryText="Perempuan" />
                </SelectField>
              </Col>
            </Row>
            <br />
            <h4>Data Ibu</h4>
            <TextField
              style={{width:'100%'}}
              name="nama_ibu"
              required="required"
              floatingLabelText="Nama Ibu"
            />
            <Row>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="no_identitas_ibu"
                  type="number"
                  required="required"
                  floatingLabelText="No. KTP/SIM/Paspor Ibu"
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="no_telpon_ibu"
                  type="number"
                  required="required"
                  floatingLabelText="No. Telepon / HP Ibu"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.pekerjaan_ibu}
                  onChange={this.handlePekerjaanIbuChange}
                  floatingLabelText="Pekerjaan Ibu"
                  floatingLabelFixed={true}
                  hintText="Pilih Pekerjaan Ibu"
                  name="pekerjaan_ibu"
                  required="required"
                >
                  <MenuItem value={1} primaryText="--Pilih Pekerjaan Ibu--" />
                  <MenuItem value={2} primaryText="Laki-laki" />
                  <MenuItem value={3} primaryText="Perempuan" />
                </SelectField>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.penghasilan_ibu}
                  onChange={this.handlePenghasilanIbuChange}
                  floatingLabelText="Penghasilan Ibu"
                  floatingLabelFixed={true}
                  hintText="Pilih Penghasilan Ibu"
                  name="penghasilan_ibu"
                  required="required"
                >
                  <MenuItem value={1} primaryText="--Pilih Penghasilan Ibu--" />
                  <MenuItem value={2} primaryText="Laki-laki" />
                  <MenuItem value={3} primaryText="Perempuan" />
                </SelectField>
              </Col>
            </Row>
            <br />
            <h4>Alamat Orang Tua</h4>
              <TextField
                style={{width:'100%'}}
                name="alamat_orang_tua"
                required="required"
                floatingLabelText="Alamat Orang Tua"
              />
              <SelectField
                style={{width:'100%'}}
                value={this.state.provinsi}
                onChange={this.handleProvinsiChange}
                floatingLabelText="Provinsi"
                floatingLabelFixed={true}
                hintText="Pilih Provinsi"
                name="provinsi"
                required="required"
              >
                <MenuItem value={1} primaryText="--Pilih Provinsi--" />
                <MenuItem value={2} primaryText="Laki-laki" />
                <MenuItem value={3} primaryText="Perempuan" />
              </SelectField>
              <Row>
                <Col xs={12} sm={6} md={6}>
                  <SelectField
                    style={{width:'100%'}}
                    value={this.state.kabkota}
                    onChange={this.handleKabkotaChange}
                    floatingLabelText="Kabupaten/Kota"
                    floatingLabelFixed={true}
                    hintText="Pilih Kabupaten/Kota"
                    name="kabkota"
                    required="required"
                  >
                    <MenuItem value={1} primaryText="--Pilih Kabupaten/Kota--" />
                    <MenuItem value={2} primaryText="Laki-laki" />
                    <MenuItem value={3} primaryText="Perempuan" />
                  </SelectField>
                </Col>
                <Col xs={12} sm={6} md={6}>
                  <SelectField
                    style={{width:'100%'}}
                    value={this.state.kecamatan}
                    onChange={this.handleKecamatanChange}
                    floatingLabelText="Kecamatan"
                    floatingLabelFixed={true}
                    hintText="Pilih Kecamatan"
                    name="kecamatan"
                    required="required"
                  >
                    <MenuItem value={1} primaryText="--Pilih Kecamatan--" />
                    <MenuItem value={2} primaryText="Laki-laki" />
                    <MenuItem value={3} primaryText="Perempuan" />
                  </SelectField>
                </Col>
              </Row>
          </form>
        </Dialog>
      </div>
    )
  }
}
export default UbahDataOrangTua;
