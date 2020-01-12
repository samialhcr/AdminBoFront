import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteAbonne} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class Ajout extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email:"",
            username:"",
            password:"",
            cin: "",
            nom: "",
            prenom: "",
            adress: "",
            numTel: "",
            profession: "",
            isActivated: "",
           contrat: {
            objectif: "",
            dateexperation: "",
            codecontrat: ""
           }  
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        const newAbonne = {
            email:this.state.email,
            username:this.state.username,
            password:this.state.password,
          cin: this.state.cin,
          nom: this.state.nom,
          prenom: this.state.prenom,
          adress: this.state.adress,
          numTel: this.state.numTel,
          profession: this.state.profession,
          isActivated: this.state.isActivated,
         contrat: {
            objectif: this.state.objectif,
            dateexperation: this.state.dateexperation,
            codecontrat: this.state.codecontrat
         }
        };

        console.log(newAbonne);
        this.props.creacteAbonne(newAbonne, this.props.history);
      }
      
  render() {
      return (
        <div className="content mt-3">
            
            <div className="animated fadeIn">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                <div class="col-xs-6 col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                <strong>Ajout d'un Abonne</strong> 
                            </div>
                            <div class="card-body card-block">
                                
                                <div class="form-group">
                                    <label class=" form-control-label">CIN</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-barcode"></i></div>
                                        <input class="form-control"
                                        name="cin"
                                        value={this.state.cin}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. XX99999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-male"></i></div>
                                        <input class="form-control"
                                         name="nom"
                                         value={this.state.nom}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Prenom</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-male"></i></div>
                                        <input class="form-control"
                                        name="prenom"
                                        value={this.state.prenom}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Email</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa ti-email"></i></div>
                                        <input class="form-control"
                                         name="email"
                                         value={this.state.email}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Xxxxxx@gmail.com</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Numero de Telephone</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-credit-card"></i></div>
                                        <input className="form-control"
                                        name="numTel"
                                        value={this.state.numTel}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. 0666666666</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom d'utilisation</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa ti-user"></i></div>
                                        <input class="form-control"
                                         name="username"
                                         value={this.state.username}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Xxxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Mot de passe</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                                        <input class="form-control"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. *******</small>
                                </div>

                                <div className="form-group">
                                    <label className=" form-control-label">Profession</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-briefcase"></i></div>
                                        <input className="form-control"
                                        name="profession"
                                        value={this.state.profession}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Adress</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="ti-location-pin"></i></div>
                                        <input className="form-control"
                                        name="adress"
                                        value={this.state.adress}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. ville/Quartier/Rue</small>
                                </div>
                                
                                <div className="form-group">
                                    <label className=" form-control-label">Activation</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-credit-card"></i></div>
                                        <input className="form-control"
                                         name="isActivated"
                                         value={this.state.isActivated}
                                         onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. True/False</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-6 col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                <strong>Ajout de Contrat</strong> <small> </small>
                            </div>
                            <div class="card-body card-block">
                                <div class="form-group">
                                    <label class=" form-control-label">Code de Contrat</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-usd"></i></div>
                                        <input class="form-control"
                                         name="Codecontrat"
                                         value={this.state.contrat.Codecontrat}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 99999999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Objectif</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-comment"></i></div>
                                        <input class="form-control"
                                        name="objectif"
                                        value={this.state.contrat.objectif}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. Xxxxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Date d'expiration</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control" type="Date"
                                        name="dateexperation"
                                        value={this.state.contrat.dateexperation}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 99/99/9999</small>
                                </div>
                               
                                
                            </div>
                            </div>
                            </div>
                </div>
                <button type="submit" className="btn btn-secondary btn-lg btn-block">Valider</button>
              </form>
            </div>         
        </div>   
      );
    
    }
  }

  Ajout.propTypes = {
    creacteAbonne: PropTypes.func.isRequired
  };

  
 

  export default connect(
    null,
    { creacteAbonne}
  )(Ajout);











