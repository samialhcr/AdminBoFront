import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {getabonnes,
  getabonneById,
  activateAbonne,
  desactivateAbonne,
  deleteabonne} from "../../../actions/projectActions"
import PropTypes from "prop-types";


import { Modal, Button } from "react-bootstrap";

class TableAbonne extends React.Component {

  componentDidMount() {
    this.props.getabonnes();
  
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
    console.log("abonne", e.target.value)
    this.props.getabonneById(e.target.value, this.props.history);
    const abonne = this.props.abonne.abonne;
    
  };
  ClickActivate = e => {
    const { abonne } = this.props.abonne;

    this.close();
    console.log("samia", e.target.value)
    this.props.activateAbonne(abonne.id, this.props.history);
   
  };

  open = e => {
    this.setState({ showModal: true });
    this.props.getabonneById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }


  Clickdesactivate = e => {
    const { abonne } = this.props.abonne;

    this.closee();
    console.log("samia", e.target.value)
    this.props.desactivateAbonne(abonne.id, this.props.history);
  };
  openn = e => {
    this.setState({ showModal1: true });
    this.props.getabonneById(e.target.value, this.props.history);
  };
  closee() {
    this.setState({ showModal1: false });
  }


  Clickabondon = e => {
    const { abonne } = this.props.abonne;

    this.closeabondon();
    console.log("samia", e.target.value)
    this.props.deleteabonne(abonne.id, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getabonneById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }
  

  render() {
    const { abonnes } = this.props.abonne;
    const { abonne } = this.props.abonne;

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
                      <strong className="card-title">List des Abonnées</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                          <th>Id</th>
                            <th>CIN</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Profession</th>
                            
                            <th>Activation</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {abonnes.map(abonne => (
                            <tr key={abonne.id}>
                           <td>{abonne.id}</td>
                              <td>{abonne.cin}</td>
                              <td>{abonne.nom}</td>
                              <td> {abonne.prenom} </td>
                              <td>{abonne.profession}</td>
                              
                              <td> {abonne.isActivated === true && (
                                  <p>Avctivé</p>
                                )}
                                {abonne.isActivated === false && (
                                  <p>Desactivé</p>
                                )}
                              </td>

                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={abonne.id}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Detail
                                </button>
                                &nbsp;&nbsp;
                                
                                 
                                <Link to={`/ListUpdateabonne/${abonne.id}`}>
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
                                      value={abonne.id}
                                  >
                                    <i class="fa fa-exclamation" />
                                    &nbsp; Supprimer
                                  </button>
                               
                                  &nbsp;&nbsp;

                                  {abonne.isActivated === false && (
                                  
                                    <button
                                      type="button"
                                      class="btn btn-success btn-sm"
                                      onClick={this.open}
                                      value={abonne.id}
                                      
                                    >
                                      <i class="fa fa-edit" />
                                      &nbsp; Activé
                                    </button>
                                  
                                )}{" "}

                                
                           {abonne.isActivated === true && (
                                  
                                  <button
                                    type="button"
                                    class="btn btn-warning btn-sm"
                                    onClick={this.openn}
                                      value={abonne.id}
                                  >
                                    <i class="fa fa-edit" />
                                    &nbsp; desactivé
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
                      <tr  key={abonne.id}>
                        <th>CIN</th>
                        <td>{abonne.id}</td>
                      </tr>
                      <tr>
                        <th>Nom</th>
                        <td>{abonne.nom}</td>
                      </tr>
                      <tr>
                        <th>Prenom</th>
                        <td> {abonne.prenom} </td>
                      </tr>
                      <tr>
                        <th>Profession</th>
                        <td>{abonne.profession}</td>
                      </tr>
                      <tr>
                        <th>Adresse</th>
                        {abonne.adress}
                      </tr>
                      <tr>
                        <th>Telephone</th>
                        <td>{abonne.numTel}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{abonne.email}</td>
                      </tr>
                      <tr>
                        <th>Activation</th>
                        <td> {abonne.isActivated === false && (
                                  <p>Avctivé</p>
                                )}
                                {abonne.isActivated === true && (
                                  <p>Desactivé</p>
                                )}
                              </td>

                      </tr>
                      <tr>
                        <th>Identifiant Contrat</th>
                        <td>{abonne.contrat ? abonne.contrat.codecontrat : "0"}</td>
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
                <p>Vous êtes sur d'actiiver l'abonné?</p>
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
                <p>Vous êtes sur de desactiver l'abonné?</p>
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
                <p>Vous êtes sur de supprimer l'abonné??</p>
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

  TableAbonne.propTypes = {
    abonne: PropTypes.object.isRequired,
    getabonnes: PropTypes.func.isRequired,
    getabonneById: PropTypes.func.isRequired,
    activateAbonne: PropTypes.func.isRequired,
    desactivateAbonne: PropTypes.func.isRequired,
    deleteabonne: PropTypes.func.isRequired
  };
  

  const mapStateToProps = state => ({
    abonne: state.abonne

  });


  export default connect(
    mapStateToProps,
    { getabonnes,getabonneById,activateAbonne,desactivateAbonne,deleteabonne}
  )(TableAbonne);

