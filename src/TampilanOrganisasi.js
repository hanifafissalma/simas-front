import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
class TampilanOrganisasi extends Component{
  render(){
    return(
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn><b>Nama Organisasi</b></TableRowColumn>
            <TableRowColumn><b>Jenis Organisasi</b></TableRowColumn>
            <TableRowColumn style={{width:'150px'}}><b>Jenjang Organisasi</b></TableRowColumn>
            <TableRowColumn><b>Posisi / Jabatan</b></TableRowColumn>
            <TableRowColumn><b>Deskripsi</b></TableRowColumn>
            <TableRowColumn><b>Bukti Dokumen</b></TableRowColumn>
            <TableRowColumn><b>Aksi</b></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>BEM FT UNJ</TableRowColumn>
            <TableRowColumn>ORMAWA</TableRowColumn>
            <TableRowColumn>Fakultas</TableRowColumn>
            <TableRowColumn>Ketua</TableRowColumn>
            <TableRowColumn>BEM FT UNJ adalah organisasi dibawah naungan FT</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}
export default TampilanOrganisasi;
