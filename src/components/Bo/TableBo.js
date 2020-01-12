import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {

  getBos,
  getBoById,
  deleteBo} from "../../actions/projectActions"
import PropTypes from "prop-types";


import { Modal, Button } from "react-bootstrap";

class TableBo extends React.Component {

  componentDidMount() {
    this.props.getBos();
  
  }
  constructor() {
    super();

    this.state = {
      showModalAbandonne: false
    };

    this.onClick = this.ClickDetail.bind(this);


    this.openabondon = this.openabondon.bind(this);
    this.closeabondon = this.closeabondon.bind(this);
  }


  ClickDetail = e => {
    e.preventDefault();
    this.props.getBoById(e.target.value, this.props.history);
    const bo = this.props.bo.bo;
    
  };


  Clickabondon = e => {
    const { bo } = this.props.bo;
    

    this.closeabondon();
    console.log("samia", e.target.value)
    this.props.deleteBo(bo.id, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getBoById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }
  

  render() {
    const { bos } = this.props.bo;
    const { bo } = this.props.bo;

      return (
        <div>
          <link rel="apple-touch-icon" href="apple-icon.png" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            rel="stylesheet"
            href="vendors/bootstrap/dist/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="vendors/font-awesome/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="vendors/themify-icons/css/themify-icons.css"
          />
          <link
            rel="stylesheet"
            href="vendors/flag-icon-css/css/flag-icon.min.css"
          />
          <link
            rel="stylesheet"
            href="vendors/selectFX/css/cs-skin-elastic.css"
          />
          <link rel="stylesheet" href="vendors/jqvmap/dist/jqvmap.min.css" />
          <link rel="stylesheet" href="assets/css/style.css" />

          

          <div className="content mt-3">
            <div className="animated fadeIn">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <strong className="card-title">List des charges Clientèles</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                          <th>Id Bo</th>
                          <th>CIN</th>
                        
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Numero de Telephone</th>
                            <th>Actions</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                        {bos.map(bo => (
                            <tr key={bo.id}>
                           
                              <td>{bo.id}</td>
                              <td>{bo.cin}</td>
                             
                              <td> {bo.prenom} </td>
                              <td> {bo.nom} </td>
                              <td> {bo.numTel} </td>
                              
                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={bo.id}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Details
                                </button>
                                &nbsp;&nbsp;
                                
                                 


                                    <Link to={`/ListUpdateBo/${bo.id}`}>
                                    <button
                                      type="button"
                                      class="btn btn-info btn-sm"
                                      
                                    >
                                      <i class="fa fa-edit" />
                                      &nbsp; Modifier
                                    </button>
                                  </Link>
                                 
                              
                              
                                &nbsp;&nbsp;
                                
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    onClick={this.openabondon}
                                      value={bo.id}
                                  >
                                    <i class="fa fa-exclamation" />
                                    &nbsp; Supprimer
                                  </button>
                               
                                 
                               
                              </td>
                            </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="mediumModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mediumModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="mediumModalLabel">
                     Details
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <table className="table table-striped table-bordered">
                    <tbody >
                      <tr  key={bo.id}>
                      <th>Id Bo</th>
                        <td>{bo.id}</td>
                      </tr>
                      <tr>
                      <th>CIN</th>
                        <td>{bo.cin}</td>
                      </tr>
                      <tr>
                      <th>Nom d'utilisation</th>
                        <td>{bo.username}</td>
                      </tr>
                      <tr>
                      <th>Prenom</th>
                        <td> {bo.prenom} </td>
                      </tr>
                      <tr>
                        <th>Nom</th>
                        <td> {bo.nom} </td>
                      </tr>
                      <tr>
                        <th>Numero de Telephone</th>
                        <td> {bo.numTel} </td>
                      </tr>
                      
                      <tr>
                        <th>Id Agence</th>
                        <td>{bo.agence ? bo.agence.id : "0"}</td>
                      </tr>
                      <tr>
                        <th>Nom d'Agence</th>
                        <td>{bo.agence ? bo.agence.name : "0"}</td>
                      </tr>
                      <tr>
                        <th>Ville d'Agence</th>
                        <td>{bo.agence ? bo.agence.city : "0"}</td>
                      </tr>
                      <tr>
                        <th>Adresse d'Agence</th>
                        <td>{bo.agence ? bo.agence.address : "0"}</td>
                      </tr>


                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          </div>

           <div
            class="modal fade"
            id="mediumModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mediumModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="mediumModalLabel">
                     Details
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <table className="table table-striped table-bordered">
                    <tbody >
                      <tr  key={bo.id}>
                      <th>Id Bo</th>
                        <td>{bo.id}</td>
                      </tr>
                      <tr>
                      <th>CIN</th>
                        <td>{bo.cin}</td>
                      </tr>
                      <tr>
                      <th>Nom d'utilisation</th>
                        <td>{bo.username}</td>
                      </tr>
                      <tr>
                      <th>Prenom</th>
                        <td> {bo.prenom} </td>
                      </tr>
                      <tr>
                        <th>Nom</th>
                        <td> {bo.nom} </td>
                      </tr>
                      <tr>
                        <th>Adresse</th>
                        <td> {bo.numTel} </td>
                      </tr>
                      <tr>
                        <th>Id Agence</th>
                        <td>{bo.agence ? bo.agence.id : "0"}</td>
                      </tr>
                      <tr>
                        <th>Nom d'Agence</th>
                        <td>{bo.agence ? bo.agence.name : "0"}</td>
                      </tr>
                      <tr>
                        <th>Ville d'Agence</th>
                        <td>{bo.agence ? bo.agence.city : "0"}</td>
                      </tr>
                      <tr>
                        <th>Adresse d'Agence</th>
                        <td>{bo.agence ? bo.agence.address : "0"}</td>
                      </tr>


                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div>
            <Modal
              className="modal-container"
              show={this.state.showModalAbandonne}
              onHide={this.closee}
              animation={true}
              bsSize="small"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="smallmodalLabel">
                  Confirmé la suppression
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <Modal.Body>
                <p>Vous êtes sur de supprimer le charge Clientèle?</p>
              </Modal.Body>

              <Modal.Footer>
                <button onClick={this.Clickabondon} class="btn btn-danger">
                  Oui
                </button>
                <button onClick={this.closeabondon} class="btn btn-secondary">
                  Non
                </button>
              </Modal.Footer>
            </Modal>
          </div>
         

          <div>
           
          </div>
        </div>
      );
    
    }
  }

  TableBo.propTypes = {

    bo: PropTypes.object.isRequired,
    getBos: PropTypes.func.isRequired,
    getBoById: PropTypes.func.isRequired,
    deleteBo: PropTypes.func.isRequired
  };
  

  const mapStateToProps = state => ({
    bo: state.bo

  });


  export default connect(
    mapStateToProps,
    { getBos,getBoById,deleteBo}
  )(TableBo);

