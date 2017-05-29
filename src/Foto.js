import React,{Component} from 'react';
import {Card, CardMedia, CardTitle, CardActions} from 'material-ui/Card';
import UbahFoto from './UbahFoto';

class Foto extends Component{
  render(){
    return(
      <Card zDepth={3}>
        <CardMedia overlay={<CardTitle title="Hanifa Fissalma" />}>
          <img src="images/hani.jpeg" alt=""/>
        </CardMedia>
        <CardTitle title="Pendidikan Teknik Informatika dan Komputer" subtitle="Fakultas Teknik"/>
        <CardActions>
          <UbahFoto />
        </CardActions>
      </Card>
    )
  }
}
export default Foto;
