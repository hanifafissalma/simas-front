import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
class TampilanStudi extends Component{
  render(){
    return(
      <div>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn><b>Mata Kuliah</b></TableRowColumn>
              <TableRowColumn style={{width:'200px'}}><b>Dosen</b></TableRowColumn>
              <TableRowColumn><b>SKS</b></TableRowColumn>
              <TableRowColumn><b>Nilai</b></TableRowColumn>
              <TableRowColumn><b>Bobot</b></TableRowColumn>
              <TableRowColumn><b>Semester</b></TableRowColumn>
              <TableRowColumn><b>Status</b></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Matematika Diskrit</TableRowColumn>
              <TableRowColumn>Med Irzal,M.Kom</TableRowColumn>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>C</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>097</TableRowColumn>
              <TableRowColumn>Terdaftar</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Desain Web</TableRowColumn>
              <TableRowColumn>Hamidillah Ajie,S.Si,M.T</TableRowColumn>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>A</TableRowColumn>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>099</TableRowColumn>
              <TableRowColumn>Terdaftar</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <b>Indeks Prestasi = Jumlah (SKS x Nilai) / Jumlah SKS = 527 / 153 = 3.44</b>
      </div>
    )
  }
}
export default TampilanStudi;
