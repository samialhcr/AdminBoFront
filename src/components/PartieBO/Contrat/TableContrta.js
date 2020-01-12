import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {
  getcontrats,
  getcontratsById,
  deletecontrat} from "../../../actions/projectActions"
import PropTypes from "prop-types";


import { Modal, Button } from "react-bootstrap";

class TableContrat extends React.Component {

  componentDidMount() {
    this.props.getcontrats();
  
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
    this.props.getcontratsById(e.target.value, this.props.history);
    const contrat = this.props.contrat.contrat;
    
  };
  


  Clickabondon = e => {
    const { contrat } = this.props.contrat;

    this.closeabondon();

    this.props.deletecontrat(contrat.codecontrat, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getcontratsById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }
  
  render() {
    const { contrats } = this.props.contrat;
    const { contrat } = this.props.contrat;

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
                      <strong className="card-title">List des Contrats</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                            <th>Code contrat</th>
                            <th>Date d'expiration</th>
                            <th>Objectif</th>

                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {contrats.map(contrat => (
                            <tr key={contrat.codecontrat}>
                           
                              <td>{contrat.codecontrat}</td>
                              <td>{contrat.dateexperation}</td>
                              <td> {contrat.objectif} </td>


                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={contrat.codecontrat}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Detail
                                </button>
                                &nbsp;&nbsp;
                                
                                 
                                 
                              
                              
                                &nbsp;&nbsp;
                                
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    onClick={this.openabondon}
                                      value={contrat.codecontrat}
                                  >
                                    <i class="fa fa-exclamation" />
                                    &nbsp; Supprimer
                                  </button>
                               
                                  &nbsp;&nbsp;

                                 
                               
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
                      <tr  key={contrat.codecontrat}>
                        <th>Code contrat</th>
                        <td>{contrat.codecontrat}</td>
                      </tr>
                      <tr>
                        <th>Date d'expiration</th>
                        <td>{contrat.dateexperation}</td>
                      </tr>
                      <tr>
                        <th>Objectif</th>
                        <td> {contrat.objectif} </td>
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
                <p>Vous êtes sur de supprimer Contrat??</p>
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

  TableContrat.propTypes = {
    contrat:PropTypes.object.isRequired,
    getcontrats:PropTypes.func.isRequired,
    getcontratsById:PropTypes.func.isRequired,
    deletecontrat: PropTypes.func.isRequired
  };
  

  const mapStateToProps = state => ({
    contrat: state.contrat

  });


  export default connect(
    mapStateToProps,
    { getcontrats,getcontratsById,deletecontrat}
  )(TableContrat);

