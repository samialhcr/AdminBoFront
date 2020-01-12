import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {
  getcomptes,
  getcompteById,
  deletecompte} from "../../../actions/projectActions"
import PropTypes from "prop-types";


import { Modal, Button } from "react-bootstrap";

class TableCompte extends React.Component {

  componentDidMount() {
    this.props.getcomptes();
  
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
    this.props.getcompteById(e.target.value, this.props.history);
    const compte = this.props.compte.compte;
    
  };


  Clickabondon = e => {
    const { compte } = this.props.compte;

    this.closeabondon();
    console.log("samia", e.target.value)
    this.props.deletecompte(compte.idCompte, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getcompteById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }
  

  render() {
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;

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
                      <strong className="card-title">List des Comptes</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                            <th>Identifiant de compte</th>
                            <th>Date de création</th>
                            <th>Solde</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {comptes.map(compte => (
                            <tr key={compte.idCompte}>
                           
                              <td>{compte.idCompte}</td>
                              <td>{compte.dateCreation}</td>
                              <td> {compte.solde} </td>
                            
                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={compte.idCompte}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Detail
                                </button>
                                &nbsp;&nbsp;
                                
                                 
                                <Link to={`/ListUpdateCompte/${compte.idCompte}`}>
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
                                      value={compte.idCompte}
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
                      <tr  key={compte.idCompte}>
                        <th>Identifiant de compte</th>
                        <td>{compte.idCompte}</td>
                      </tr>
                      <tr>
                        <th>Date de création</th>
                        <td>{compte.dateCreation}</td>
                      </tr>
                      <tr>
                        <th>Solde</th>
                        <td> {compte.solde} </td>
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
                  Yes
                </button>
                <button onClick={this.close} class="btn btn-secondary">
                  No
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
                  Yes
                </button>
                <button onClick={this.closee} class="btn btn-secondary">
                  No
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
                <p>Vous êtes sur de supprimer Compte??</p>
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

  TableCompte.propTypes = {
    compte: PropTypes.object.isRequired,
    getcomptes: PropTypes.func.isRequired,
    getcompteById: PropTypes.func.isRequired,
    deletecompte: PropTypes.func.isRequired
  };
  

  const mapStateToProps = state => ({
    compte: state.compte

  });


  export default connect(
    mapStateToProps,
    { getcomptes,getcompteById,deletecompte}
  )(TableCompte);

