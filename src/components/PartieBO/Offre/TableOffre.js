import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {getoffres,
  getoffreById,
  deleteoffre,
  desactivateOffre,
  activateOffre} from "../../../actions/projectActions"
import PropTypes from "prop-types";


import { Modal, Button } from "react-bootstrap";

class TableOffre extends React.Component {

  componentDidMount() {
    this.props.getoffres();
  
  }
  constructor() {
    super();

    this.state = {
      showModal: false,
      showModal1: false,
      showModalAbandonne: false
    };


    this.onClick = this.ClickDetail.bind(this);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.openn = this.openn.bind(this);
    this.closee = this.closee.bind(this);


    this.openabondon = this.openabondon.bind(this);
    this.closeabondon = this.closeabondon.bind(this);
  }


  ClickDetail = e => {
    e.preventDefault();
    this.props.getoffreById(e.target.value, this.props.history);
    const offre = this.props.offre.offre;
    
  };


  Clickabondon = e => {
    const { offre } = this.props.offre;

    this.closeabondon();
    this.props.deleteoffre(offre.id_Offre, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getoffreById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }

  Clickdesactivate = e => {
    const { offre } = this.props.offre;

    this.closee();
    
    this.props.desactivateOffre(offre.id_Offre, this.props.history);
  };
  openn = e => {
    this.setState({ showModal1: true });
    this.props.getoffreById(e.target.value, this.props.history);
  };
  closee() {
    this.setState({ showModal1: false });
  }



  ClickActivate = e => {
    const { offre } = this.props.offre;

    this.close();
    console.log("samia", e.target.value)
    this.props.activateOffre(offre.id_Offre, this.props.history);
   
  };
  open = e => {
    this.setState({ showModal: true });
    this.props.getoffreById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }

  

  render() {
    const { offres } = this.props.offre;
    const { offre } = this.props.offre;

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
                      <strong className="card-title">List des Offres</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                            <th>Id</th>
                       
                           
                            <th>Date fin</th>
                            <th>Etat offre</th>
                            
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {offres.map(offre => (
                            <tr key={offre.id_Offre}>
                           
                              <td>{offre.id_Offre}</td>
                              
                              
                             
                              <td>{offre.dateFin}</td>
                              
                              <td> {offre.etatOffre === true && (
                                  <p>Confirmé</p>
                                )}<br/>
                                {offre.etatOffre === false && (
                                  <p>Non Confirmé</p>
                                )}
                              </td>


                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={offre.id_Offre}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Details
                                </button>
                                &nbsp;&nbsp;
                                
                                
                                <Link to={`/ListUpdateOffre/${offre.id_Offre}`}>
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
                                      value={offre.id_Offre}
                                  >
                                    <i class="fa fa-exclamation" />
                                    &nbsp; Supprimer
                                  </button>

                                  &nbsp;&nbsp;

                                  {offre.etatOffre === false && (

                                   <button
                                     type="button"
                                     class="btn btn-success btn-sm"
                                     onClick={this.open}
                                     value={offre.id_Offre}>
                                          <i class="fa fa-edit" />
                                      &nbsp; Confirmé
                                   </button>
                                )}{" "}
                                
                                {offre.etatOffre === true && (
                                <button
                                type="button"
                                class="btn btn-warning btn-sm"
                                onClick={this.openn}
                                value={offre.id_Offre}>
                                  <i class="fa fa-edit" />
                                  &nbsp; Non Confirmé
                                  </button>
                                  )}{" "}
                               
                                 
                               
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
                     DetailS Offre
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
                      <tr  key={offre.id_Offre}>
                        <th>Id offre</th>
                        <td>{offre.id_Offre}</td>
                      </tr>

                      <tr>
                        <th>Date debuT</th>
                        <td> {offre.dateDebut} </td>
                      </tr>
                      <tr>
                        <th>Date fin</th>
                        <td>{offre.dateFin}</td>
                      </tr>
                      <tr>
                        <th>Etat offre</th>
                        
                        <td> {offre.etatOffre === false && (
                                  <p>Non Confirmé</p>
                                )}
                                {offre.etatOffre === true && (
                                  <p>Confirmé</p>
                                )}
                              </td>
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
              show={this.state.showModal1}
              onHide={this.closee}
              animation={true}
              bsSize="small"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="smallmodalLabel">
                Confirmer la désactivation
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
                <p>Vous êtes sur de ne pas Confirmé l'offre?</p>
              </Modal.Body>

              <Modal.Footer>
                <button onClick={this.Clickdesactivate} class="btn btn-danger">
                  Oui
                </button>
                <button onClick={this.closee} class="btn btn-secondary">
                  Non
                </button>
              </Modal.Footer>
            </Modal>
          </div>

          <div>
            <Modal
              className="modal-container"
              show={this.state.showModal}
              onHide={this.close}
              animation={true}
              bsSize="small"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="smallmodalLabel">
                  Confirmer l'activation
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
                <p>Vous êtes sur de Confirmé l'offre?</p>
              </Modal.Body>

              <Modal.Footer>
                <button onClick={this.ClickActivate} class="btn btn-danger">
                  Oui
                </button>
                <button onClick={this.close} class="btn btn-secondary">
                  Non
                </button>
              </Modal.Footer>
            </Modal>
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
                <p>Vous êtes sur de supprimer l'offre?</p>
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

  TableOffre.propTypes = {
    offre:PropTypes.object.isRequired,
    getoffres: PropTypes.func.isRequired,
    getoffreById: PropTypes.func.isRequired,
    deleteoffre: PropTypes.func.isRequired,
    desactivateOffre: PropTypes.func.isRequired,
    activateOffre: PropTypes.func.isRequired
  };
  

  const mapStateToProps = state => ({
    offre: state.offre

  });


  export default connect(
    mapStateToProps,
    {getoffres,getoffreById,deleteoffre,desactivateOffre,activateOffre}
  )(TableOffre);

