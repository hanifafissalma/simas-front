import React ,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Tabs, Tab} from 'material-ui/Tabs';
import {green900} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Foto from './Foto';
import TampilanBiodata from './TampilanBiodata';
import UbahBiodata from './UbahBiodata';
import UbahDataOrangTua from './UbahDataOrangTua';
import TampilanDataOrangTua from './TampilanDataOrangTua';
import TampilanOrganisasi from './TampilanOrganisasi';
import TampilanPrestasi from './TampilanPrestasi';
import TampilanStudi from './TampilanStudi';
import TambahOrganisasi from './TambahOrganisasi';
import TambahPrestasi from './TambahPrestasi';
class Body extends Component{
  render(){
    const styles = {
      button: {
        marginTop:10,
        marginBottom: 12,
        width:300
      },
      h2:{
        marginLeft:30
      }
    };
    return(
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} md={3} sm={3} className="row">
              <div>
                <Foto />
              </div>
            </Col>
            <Col xs={12} md={9} sm={9} className="row2">
              <Tabs>
                <Tab label="BIODATA"   style={{backgroundColor: green900}}>
                  <div>
                    <Row>
                      <Col xs={12} md={7} sm={7}>
                        <h2 style={styles.h2}>BIODATA MAHASISWA</h2>
                      </Col>
                      <Col xs={12} md={5} sm={5}>
                        <UbahBiodata />
                      </Col>
                    </Row>
                    <TampilanBiodata />
                  </div>
                </Tab>
                <Tab label="ORANG TUA"   style={{backgroundColor: green900}}>
                  <div>
                    <Row>
                      <Col xs={12} md={7} sm={7}>
                        <h2 style={styles.h2}>DATA ORANG TUA MAHASISWA</h2>
                      </Col>
                      <Col xs={12} md={5} sm={5}>
                        <UbahDataOrangTua />
                      </Col>
                    </Row>
                      <TampilanDataOrangTua />
                  </div>
                </Tab>
                <Tab label="ORGANISASI"   style={{backgroundColor: green900}}>
                  <div>
                    <Row>
                      <Col xs={12} md={7} sm={7}>
                        <h2 style={styles.h2}>DATA ORGANISASI MAHASISWA</h2>
                      </Col>
                      <Col xs={12} md={5} sm={5}>
                        <TambahOrganisasi />
                      </Col>
                    </Row>
                    <TampilanOrganisasi />
                  </div>
                </Tab>
                <Tab label="PRESTASI"   style={{backgroundColor: green900}}>
                  <div>
                    <Row>
                      <Col xs={12} md={7} sm={7}>
                        <h2 style={styles.h2}>DATA PRESTASI MAHASISWA</h2>
                      </Col>
                      <Col xs={12} md={5} sm={5}>
                        <TambahPrestasi />
                      </Col>
                    </Row>
                    <TampilanPrestasi />
                  </div>
                </Tab>
                <Tab label="DHS"   style={{backgroundColor: green900}}>
                  <div>
                    <Row>
                      <Col xs={12} md={7} sm={7}>
                        <h2 style={styles.h2}>DAFTAR HASIL STUDI</h2>
                      </Col>
                      <Col xs={12} md={5} sm={5}>
                        <RaisedButton label="CETAK KHS" backgroundColor="#F44336"  style={styles.button} />
                      </Col>
                    </Row>
                    <TampilanStudi />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Body;
