import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { Row, Col } from 'react-flexbox-grid';
class TampilanDataOrangTua extends Component{
  render(){
    return(
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h3 style={{marginLeft:'30px'}}>DATA AYAH</h3>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{width:'200px'}}><b>Nama Ayah</b></TableRowColumn>
                <TableRowColumn style={{width:'20px'}}><b>:</b></TableRowColumn>
                <TableRowColumn><b>Papa bin Papa</b></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. KTP/SIM/Paspor</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>5235172839473829</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. Telepon / HP Ayah</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>08155555555</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Pekerjaan Ayah</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Pegawai Swasta</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Penghasilan Ayah</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Rp.3.000.001 - Rp.4.000.000</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <br />
          <h3 style={{marginLeft:'30px'}}>DATA IBU</h3>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{width:'200px'}}><b>Nama Ibu</b></TableRowColumn>
                <TableRowColumn style={{width:'20px'}}><b>:</b></TableRowColumn>
                <TableRowColumn><b>Mama bin Mama</b></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. KTP/SIM/Paspor</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>5235172839473829</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>No. Telepon / HP Ibu</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>08155555555</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Pekerjaan Ibu</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Pegawai Swasta</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Penghasilan Ibu</TableRowColumn>
                <TableRowColumn style={{width:'20'}}>:</TableRowColumn>
                <TableRowColumn>Rp.3.000.001 - Rp.4.000.000</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <br />
          <h3 style={{marginLeft:'30px'}}>ALAMAT ORANG TUA</h3>
          <Table selectable={false}>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{width:'200px'}}><b>Alamat Orang Tua</b></TableRowColumn>
                <TableRowColumn style={{width:'20px'}}><b>:</b></TableRowColumn>
                <TableRowColumn><b>Jl. Anggrek 2 No. 256 RT010/007 Perumnas 1</b></TableRowColumn>
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
            </TableBody>
          </Table>
        </Col>
      </Row>
    )
  }
}
export default TampilanDataOrangTua;
