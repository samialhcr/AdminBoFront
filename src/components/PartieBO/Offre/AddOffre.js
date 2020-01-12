import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteOffre} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class AddOffre extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            dateDebut:"",
            dateFin:"",
            etatOffre:"",
            choisi:"false",
            id_Offre:"",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

     onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        const newOffre = {
            dateDebut:this.state.dateDebut,
            dateFin:this.state.dateFin,
            etatOffre:this.state.etatOffre,
            choisi:this.state.choisi,
            id_Offre:this.state.id_Offre,
        };

        console.log(newOffre);
        this.props.creacteOffre(newOffre, this.props.history);
      }
  

    
      
  render() {


  
      return (
        

        <div className="content mt-3">
            
            <div className="animated fadeIn">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <div class="col-xs-6 col-sm-6">
                        

                    
                        <div class="card">
                            

                        <div className="card-header">
                                <strong>Ajout d'Offre</strong> 
                            </div>
                            <div class="card-body card-block">
                            <div class="form-group">
                                    <label class=" form-control-label">Id Ofre</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-money"></i></div>
                                        <input class="form-control"
                                        required
                                        name="id_Offre"
                                        value={this.state.id_Offre}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 99999</small>
                                </div>
                               
                                <div class="form-group">
                                    <label class=" form-control-label">Date de Debut</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control" type="Date"
                                        required
                                        name="dateDebut"
                                        value={this.state.dateDebut}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. 99/99/9999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Date de Fin</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control" type="Date"
                                        required
                                        name="dateFin"
                                        value={this.state.dateFin}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. 99/99/9999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Etat Offre</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-money"></i></div>
                                        <input class="form-control"
                                        required
                                        name="etatOffre"
                                        value={this.state.etatOffre}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. True/False</small>
                                </div>
                              

                                
                               
                                </div>
                                <button type="submit" className="btn btn-secondary btn-lg btn-block">Valider</button>
                            </div>
                        </div>
                    </div>
                
                
              </form>
            </div>         
        </div>   
      );
    
    }
  }

  AddOffre.propTypes = {
    creacteOffre: PropTypes.func.isRequired
  };

 
  export default connect(
    null,
    { creacteOffre}
  )(AddOffre);














