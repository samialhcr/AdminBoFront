import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";


import PropTypes from "prop-types";
import {getagences,getagenceById,deleteagence} from "../../actions/projectActions"

import { Modal, Button } from "react-bootstrap";



class Agencee extends React.Component {

  componentDidMount() {
    this.props.getagences();
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
    this.props.getagenceById(e.target.value, this.props.history);
    const agence = this.props.agence.agence;
    
  };
  


  Clickabondon = e => {
    const { agence } = this.props.agence;

    this.closeabondon();

    this.props.deleteagence(agence.id, this.props.history);
  };
  openabondon = e => {
    this.setState({ showModalAbandonne: true });
    this.props.getagenceById(e.target.value, this.props.history);
  };
  closeabondon() {
    this.setState({ showModalAbandonne: false });
  }

  render() {

    const { agences } = this.props.agence;
    const { agence } = this.props.agence;

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
                      <strong className="card-title">List des Agences</strong>
                    </div>
                    <div className="card-body">
                      <table
                        id="bootstrap-data-table-export"
                        className="table table-striped table-bordered"
                      >
                      <thead>
                          <tr>
                          <th>Id Agence</th>
                          <th>Nom d'agence</th>
                          <th>Vile</th>
                          <th>Adresse</th>

                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {agences.map(agence => (
                            <tr key={agence.id}>
                           
                              <td>{agence.id}</td>
                              <td>{agence.name}</td>
                              <td> {agence.city} </td>
                              <td>{agence.address}</td>
                              
                            
                            

                              <td>
                                <button
                                  class="btn btn-secondary btn-sm"
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#mediumModal"
                                  onClick={this.ClickDetail}
                                  value={agence.id}
                                >
                                  <i class="fa fa-info" />
                                  &nbsp; Details
                                </button>
                                &nbsp;&nbsp;
                                
                                 
                                  

                                    <Link to={`/ListUpdateAgence/${agence.id}`}>
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
                                      value={agence.id}
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
                <p>Vous êtes sur de supprimer l'agence??</p>
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
                     Details d'agence
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
                      <tr  key={agence.id}>
                        <th>Id</th>
                        <td>{agence.id}</td>
                      </tr>
                      <tr>
                        <th>Nom</th>
                        <td>{agence.name}</td>
                      </tr>
                      <tr>
                        <th>Ville</th>
                        <td> {agence.city} </td>
                      </tr>
                      <tr>
                        <th>Adresse</th>
                        <td>{agence.address}</td>
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
                    exit
                  </button>
                </div>
              </div>
            </div>
          </div>

         
         

          <div>
           
          </div>
        </div>
      );
    
    }
  }


  Agencee.propTypes = {

    agence: PropTypes.object.isRequired,
    getagences: PropTypes.func.isRequired,
    getagenceById: PropTypes.func.isRequired,
    deleteagence: PropTypes.func.isRequired

  };
  

  const mapStateToProps = state => ({
    agence: state.agence

  });

  export default connect(
    mapStateToProps,
    { getagences,getagenceById,deleteagence}
  )(Agencee);


