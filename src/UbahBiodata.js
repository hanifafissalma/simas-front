import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
class UbahBiodata extends Component{
  constructor(){
    super();
    const minDate = new Date();
    this.state = {
      open: false,
      jenjang:1,
      fakultas:1,
      prodi:1,
      agama:1,
      provinsi:1,
      kabkota:1,
      kecamatan:1,
      kewarganegaraan:1,
      jenis_kelamin:1,
      gol_darah:1,
      bidik_misi:1,
      minDate:minDate
    }
    this.handleOpen=this.handleOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleJenjangChange=this.handleJenjangChange.bind(this);
    this.handleFakultasChange=this.handleFakultasChange.bind(this);
    this.handleProdiChange=this.handleProdiChange.bind(this);
    this.handleAgamaChange=this.handleAgamaChange.bind(this);
    this.handleProvinsiChange=this.handleProvinsiChange.bind(this);
    this.handleKabkotaChange=this.handleKabkotaChange.bind(this);
    this.handleKecamatanChange=this.handleKecamatanChange.bind(this);
    this.handleKewarganegaraanChange=this.handleKewarganegaraanChange.bind(this);
    this.handleJeniskelaminChange=this.handleJeniskelaminChange.bind(this);
    this.handleGolongandarahChange=this.handleGolongandarahChange.bind(this);
    this.handleBidikmisiChange=this.handleBidikmisiChange.bind(this);
    this.handleChangeMinDate=this.handleChangeMinDate.bind(this);
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
  handleJenjangChange(event, index, value) {
    this.setState({jenjang:value});
  }
  handleFakultasChange(event, index, value){
    this.setState({fakultas:value});
  }
  handleProdiChange(event, index, value){
    this.setState({prodi:value});
  }
  handleAgamaChange(event, index, value){
    this.setState({agama:value});
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
  handleKewarganegaraanChange(event, index, value){
    this.setState({kewarganegaraan:value});
  }
  handleJeniskelaminChange(event, index, value){
    this.setState({jenis_kelamin:value});
  }
  handleGolongandarahChange(event, index, value){
    this.setState({gol_darah:value});
  }
  handleBidikmisiChange(event, index, value){
    this.setState({bidik_misi:value});
  }
  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };
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
        <RaisedButton label="UBAH BIODATA" backgroundColor="#FB8C00" style={{width:'300px',marginTop:'10px'}} onTouchTap={this.handleOpen} />
        <Dialog
          title="Ubah Biodata Mahasiswa"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <form id="form_ubah_biodata" onSubmit={this.handleSubmit}>
            <TextField
              style={{width:'100%'}}
              hintText="5235122734"
              name="noreg"
              required="required"
              defaultValue="5235122734"
              floatingLabelText="Noreg"
              disabled={true}
            />
            <TextField
              style={{width:'100%'}}
              name="nama"
              required="required"
              floatingLabelText="Nama Lengkap"
            />
            <SelectField
              style={{width:'100%'}}
              value={this.state.jenjang}
              onChange={this.handleJenjangChange}
              floatingLabelText="Jenjang"
              floatingLabelFixed={true}
              hintText="Pilih Jenjang"
              name="jenjang"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Jenjang--" />
              <MenuItem value={2} primaryText="D3" />
              <MenuItem value={3} primaryText="S1" />
              <MenuItem value={4} primaryText="S2" />
              <MenuItem value={5} primaryText="S3" />
            </SelectField>
            <SelectField
              style={{width:'100%'}}
              value={this.state.fakultas}
              onChange={this.handleFakultasChange}
              floatingLabelText="Fakultas"
              floatingLabelFixed={true}
              hintText="Pilih Fakultas"
              name="fakultas"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Fakultas--" />
              <MenuItem value={2} primaryText="Fakultas Ilmu Pendidikan" />
              <MenuItem value={3} primaryText="Fakultas Bahasa dan Seni" />
              <MenuItem value={4} primaryText="Fakultas Ekonomi" />
              <MenuItem value={5} primaryText="Fakultas Teknik" />
              <MenuItem value={6} primaryText="Fakultas Ilmu Sosial" />
              <MenuItem value={7} primaryText="Fakultas Ilmu Olahraga" />
              <MenuItem value={8} primaryText="Fakultas Matematika dan Ilmu Pengetahuan Alam" />
              <MenuItem value={9} primaryText="Fakultas Psikologi" />
              <MenuItem value={10} primaryText="Pascasarjana" />
            </SelectField>
            <SelectField
              style={{width:'100%'}}
              value={this.state.prodi}
              onChange={this.handleProdiChange}
              floatingLabelText="Program Studi"
              floatingLabelFixed={true}
              hintText="Pilih Program Studi"
              name="prodi"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Program Studi--" />
              <MenuItem value={2} primaryText="D3" />
              <MenuItem value={3} primaryText="S1" />
              <MenuItem value={4} primaryText="S2" />
              <MenuItem value={5} primaryText="S3" />
            </SelectField>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <DatePicker
                  style={{width:'100%'}}
                  onChange={this.handleChangeMinDate}
                  floatingLabelText="Tanggal Masuk"
                  name="tanggal_masuk"
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <DatePicker
                  style={{width:'100%'}}
                  onChange={this.handleChangeMinDate}
                  floatingLabelText="Tanggal Lulus"
                  name="tanggal_lulus"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="tempat_lahir"
                  required="required"
                  floatingLabelText="Tempat Lahir"
                />
              </Col>
              <Col xs={12} sm={6} md={6}>
                <DatePicker
                  style={{width:'100%'}}
                  onChange={this.handleChangeMinDate}
                  floatingLabelText="Tanggal Lahir"
                  name="tanggal_lahir"
                />
              </Col>
            </Row>
            <SelectField
              style={{width:'100%'}}
              value={this.state.agama}
              onChange={this.handleAgamaChange}
              floatingLabelText="Agama"
              floatingLabelFixed={true}
              hintText="Pilih Agama"
              name="agama"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Agama--" />
              <MenuItem value={2} primaryText="Islam" />
              <MenuItem value={3} primaryText="Kristen" />
              <MenuItem value={4} primaryText="Katholik" />
              <MenuItem value={5} primaryText="Hindu" />
              <MenuItem value={6} primaryText="Budha" />
              <MenuItem value={7} primaryText="Konghucu" />
              <MenuItem value={8} primaryText="Lainnya" />
            </SelectField>
            <TextField
              style={{width:'100%'}}
              name="alamat"
              required="required"
              floatingLabelText="Alamat"
            />
            <Row>
              <Col xs={12} sm={6} md={6}>
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
                  <MenuItem value={2} primaryText="1" />
                  <MenuItem value={3} primaryText="2" />
                </SelectField>
              </Col>
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
                  <MenuItem value={2} primaryText="1" />
                  <MenuItem value={3} primaryText="2" />
                </SelectField>
              </Col>
            </Row>
            <Row>
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
                  <MenuItem value={2} primaryText="1" />
                  <MenuItem value={3} primaryText="2" />
                </SelectField>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <TextField
                  style={{width:'100%'}}
                  name="kelurahan"
                  required="required"
                  floatingLabelText="Kelurahan"
                />
              </Col>
            </Row>
            <SelectField
              style={{width:'100%'}}
              value={this.state.kewarganegaraan}
              onChange={this.handleKewarganegaraanChange}
              floatingLabelText="Kewarganegaraan"
              floatingLabelFixed={true}
              hintText="Pilih Kewarganegaraan"
              name="kewarganegaraan"
              required="required"
            >
              <MenuItem value={1} primaryText="--Pilih Kewarganegaraan--" />
              <MenuItem value={2} primaryText="WNI" />
              <MenuItem value={3} primaryText="WNA" />
            </SelectField>
            <TextField
              style={{width:'100%'}}
              name="no_identitas"
              type="number"
              required="required"
              floatingLabelText="No. KTP/SIM/Paspor"
            />
            <Row>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.jenis_kelamin}
                  onChange={this.handleJeniskelaminChange}
                  floatingLabelText="Jenis Kelamin"
                  floatingLabelFixed={true}
                  hintText="Pilih Jenis Kelamin"
                  name="jenis_kelamin"
                  required="required"
                >
                  <MenuItem value={1} primaryText="--Pilih Jenis Kelamin--" />
                  <MenuItem value={2} primaryText="Laki-laki" />
                  <MenuItem value={3} primaryText="Perempuan" />
                </SelectField>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <SelectField
                  style={{width:'100%'}}
                  value={this.state.gol_darah}
                  onChange={this.handleGolongandarahChange}
                  floatingLabelText="Golongan Darah"
                  floatingLabelFixed={true}
                  hintText="Pilih Golongan Darah"
                  name="golongan_darah"
                >
                  <MenuItem value={1} primaryText="--Pilih Golongan Darah--" />
                  <MenuItem value={2} primaryText="O" />
                  <MenuItem value={3} primaryText="A" />
                  <MenuItem value={4} primaryText="B" />
                  <MenuItem value={5} primaryText="AB" />
                </SelectField>
              </Col>
            </Row>
            <TextField
              style={{width:'100%'}}
              name="email"
              type="email"
              required="required"
              floatingLabelText="Email"
            />
            <SelectField
              style={{width:'100%'}}
              value={this.state.bidik_misi}
              onChange={this.handleBidikmisiChange}
              floatingLabelText="Status Bidik Misi"
              floatingLabelFixed={true}
              hintText="Pilih Status Bidik Misi"
              name="bidik_misi"
            >
              <MenuItem value={1} primaryText="--Pilih Status Bidik Misi--" />
              <MenuItem value={2} primaryText="Ya" />
              <MenuItem value={3} primaryText="Tidak" />
            </SelectField>
          </form>
        </Dialog>
      </div>
    )
  }
}
export default UbahBiodata;
