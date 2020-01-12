import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteAbonne} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class AddAbonne extends React.Component {

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
            
          contrat:{
                Codecontrat:"",
                objectif: "",
                dateexperation: ""
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
          prenom: this.state.prenom,
          profession: this.state.profession,
          isActivated: this.state.isActivated,
         contrat: JSON.parse(this.state.contrat)
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
              <div className="col-xs-6 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <strong>Ajout d'un Abonne</strong> 
                            </div>
                            <div className="card-body card-block">
                                <div className="form-group">
                                    <label className=" form-control-label">CIN</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                        <input className="form-control"
                                        required
                                        name="cin"
                                        value={this.state.cin}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. HH1234567</small>
                                </div>
                                
                                <div className="form-group">
                                    <label className=" form-control-label">Nom</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-male"></i></div>
                                        <input className="form-control"
                                        required
                                        name="nom"
                                        value={this.state.nom}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                        <small className="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Prenom</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-male"></i></div>
                                        <input className="form-control"
                                        required
                                        name="prenom"
                                        value={this.state.prenom}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-male"></i></div>
                                        <input className="form-control"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. Xxxxx@mail.com</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">UserName</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-male"></i></div>
                                        <input className="form-control"
                                        required
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Mot de passe</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-male"></i></div>
                                        <input className="form-control"
                                        required
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. *******</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Profession</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-briefcase"></i></div>
                                        <input className="form-control"
                                        required
                                        name="profession"
                                        value={this.state.profession}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div className="form-group">
                                    <label className=" form-control-label">Adresse</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="ti-location-pin"></i></div>
                                        <input className="form-control"
                                        required
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
                                        required
                                        name="isActivated"
                                        value={this.state.isActivated}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. True/False</small>
                                </div>

                                <div className="form-group">
                                    <label className=" form-control-label">Numero de Telephone</label>
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-credit-card"></i></div>
                                        <input className="form-control"
                                        required
                                        name="numTel"
                                        value={this.state.numTel}
                                        onChange={this.onChange.bind(this)}
                                        
                                        ></input>
                                    </div>
                                    <small className="form-text text-muted">ex. 0666666666</small>
                                </div>

                                
                                <button type="submit" className="btn btn-secondary btn-lg btn-block">Ajouter</button>
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

  AddAbonne.propTypes = {
    creacteAbonne: PropTypes.func.isRequired,

  };

 

  export default connect(
    null,
    { creacteAbonne}
  )(AddAbonne);











