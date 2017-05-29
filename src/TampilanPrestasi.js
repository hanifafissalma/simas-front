import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
class TampilanPrestasi extends Component{
  render(){
    return(
      <Table selectable={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn style={{width:'150px'}}><b>Nama Prestasi</b></TableRowColumn>
            <TableRowColumn><b>Jenis Prestasi</b></TableRowColumn>
            <TableRowColumn><b>Jenjang Prestasi</b></TableRowColumn>
            <TableRowColumn><b>Deskripsi</b></TableRowColumn>
            <TableRowColumn><b>Bukti Dokumen</b></TableRowColumn>
            <TableRowColumn><b>Bukti Dokumentasi</b></TableRowColumn>
            <TableRowColumn><b>Aksi</b></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>IT Techno Cup 2017</TableRowColumn>
            <TableRowColumn>Prestasi</TableRowColumn>
            <TableRowColumn>Regional</TableRowColumn>
            <TableRowColumn>Mendapatkan juara II di PNJ</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}
export default TampilanPrestasi;
