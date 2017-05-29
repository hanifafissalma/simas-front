import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Row, Col } from 'react-flexbox-grid';
class TampilanBiodata extends Component{
  render(){
    return(
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{width:'200px'}}><b>Noreg</b></TableRowColumn>
                <TableRowColumn style={{width:'20px'}}><b>:</b></TableRowColumn>
                <TableRowColumn><b>5235122734</b></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Nama</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Hanifa Fissalma</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Jenjang</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>S1</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Fakultas</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Fakultas Teknik</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Program Studi</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Pendidikan Teknik Informatika dan Komputer</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Tanggal Masuk</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>3 September 2012</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Tanggal Lulus</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>6 September 2016</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Tempat Lahir</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Bekasi</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Tanggal Lahir</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>6 Juli 1994</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Agama</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Islam</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Alamat</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Jl. Anggrek 2 No. 256 RT010/007 Perumnas 1</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Provinsi</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Jawa Barat</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Kabupaten/Kota</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Kota Bekasi</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Kecamatan</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Bekasi Barat</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Kelurahan</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Jakasampurna</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Kewarganegaraan</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Indonesia</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. KTP</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>3275024123455999</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Jenis Kelamin</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Perempuan</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Golongan Darah</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>O</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. Telepon/HP</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>021888888888</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Email</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Jakasampurna</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Bidik Misi</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Tidak</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Col>
      </Row>
    )
  }
}
export default TampilanBiodata;
