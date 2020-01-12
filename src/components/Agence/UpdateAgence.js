import React from "react";

import { Link } from "react-router-dom";


import PropTypes from "prop-types";

import {creacteAgence,getagenceById,getagences,updateAgence} from  "../../actions/projectActions"

import { connect } from "react-redux";

class UpdateAgence extends React.Component {

    componentDidMount() {
        //recuperation de l'id de la demande
        const  id  = this.props.id;
        console.log(id);
        this.props.getagenceById(id, this.props.history);
    
      }

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            name:"",
            city:"",
            address: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        const {
          id,
          name,
          city,
          address
        } = nextProps.agence.agence;
        this.setState({
          id,
          name,
          city,
          address
        });
    
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
        const updateagence = {
          id: this.state.id,
          name: this.state.name,
          city: this.state.city,
          address: this.state.address
        };
    
        this.props.updateAgence(updateagence, this.props.history);
      }


  

  render() {
  
      return (
        

        <div class="content mt-3">
            
            <div class="animated fadeIn">

            <form onSubmit={this.onSubmit}>
                <div class="row">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

                    <div class="col-xs-6 col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                <strong>Modifier ces champs</strong> 
                            </div>
                            <div class="card-body card-block">
                                <div class="form-group">
                                    <label class=" form-control-label">ID Agence</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control"
                                         name="id"
                                         value={this.state.id}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 9999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom d'Agence</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="ti-home"></i></div>
                                        <input class="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Ville</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="ti-pencil-alt2"></i></div>
                                        <input class="form-control"
                                         name="city"
                                         value={this.state.city}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Yyyyy</small>
                                </div>

                                <div class="form-group">
                                    <label class=" form-control-label">Adresse</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                                        <input class="form-control"
                                         name="address"
                                         value={this.state.address}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. ville/Quartier/Rue</small>
                                </div>
                                <button type="submit" class="btn btn-secondary btn-lg btn-block">Modifier</button>

                            </div>
                        </div>
                    </div>

                   
                </div>
                </form>
            </div>
           
        </div>

       
      );
    
    }
  }

  UpdateAgence.propTypes = {
    creacteAgence: PropTypes.func.isRequired,

    getagenceById: PropTypes.func.isRequired,
    updateAgence: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    agence: state.agence

  });

  export default connect(
    mapStateToProps,
    { creacteAgence,getagenceById,updateAgence}
  )(UpdateAgence);
 

 







