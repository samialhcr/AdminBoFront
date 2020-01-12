import React from "react";

import { Link } from "react-router-dom";


import PropTypes from "prop-types";

import {creacteBo,getagenceById,getagences} from  "../../actions/projectActions"

import { connect } from "react-redux";



class AddBo extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            email:"",
            username:"",
            password: "",
            cin:"",
            prenom:"",
            nom: "",
            numTel:"",
           agence:{
           }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

    componentDidMount() {
        this.props.getagences();
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        const newBo = {
            id:this.state.id,
            email:this.state.email,
            username:this.state.username,
            password: this.state.password,
            cin:this.state.cin,
            prenom:this.state.prenom,
            nom: this.state.nom,
            numTel:this.state.numTel,
           agence:this.state.agence,
           agence: JSON.parse(this.state.agence)
        };

        //this.props.getagenceById(this.state.agence, this.props.history);
       
        console.log(newBo);
        this.props.creacteBo(newBo, this.props.history);
      }
  

  render() {

    const { agences } = this.props.agence;
    const { agence } = this.props.agence;
  
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
                                <strong>Remplissez ces champs</strong> 
                            </div>
                            <div class="card-body card-block">
                            <div class="form-group">
                                    <label class=" form-control-label">Id</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-male"></i></div>
                                        <input class="form-control"
                                        required
                                         name="id"
                                         value={this.state.id}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. 9999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">CIN</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control"
                                        required
                                         name="cin"
                                         value={this.state.cin}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. XX999999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-male"></i></div>
                                        <input class="form-control"
                                        required
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
                                        required
                                         name="prenom"
                                         value={this.state.prenom}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Yyyyy</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom d'utilisteur</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                                        <input class="form-control"
                                        required
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
                                        <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                                        <input class="form-control"
                                        required
                                        type="password"
                                         name="password"
                                         value={this.state.password}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. ********</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Mail</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                                        <input class="form-control"
                                        required
                                         name="email"
                                         value={this.state.email}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. xxxxx@gmail.com</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Numeo de Telephone</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-credit-card"></i></div>
                                        <input class="form-control"
                                        required
                                         name="numTel"
                                         value={this.state.numTel}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 0666666</small>
                                </div>
                                <div class="form-group">
                                <label class=" form-control-label">Agence</label>
                                <select
                              id="select"
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="agence"
                              onChange={this.onChange.bind(this)}
                              required
                            >
                              <option value={null}>Choisir un Identifiant...</option>
                              {agences.map(agence => (
                                <option
                                  value={JSON.stringify(agence)}
                                  key={agence.id}
                                >
                                  {agence.id}
                                </option>
                              ))}
                            </select>
                            </div>

                                
                                
                                <button type="submit" class="btn btn-secondary btn-lg btn-block">Ajouter</button>
                               
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

  AddBo.propTypes = {
    creacteBo: PropTypes.func.isRequired,
    getagenceById:PropTypes.func.isRequired,
    agence: PropTypes.object.isRequired,
    getagences:PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    agence: state.agence

  });
 
  export default connect(
    mapStateToProps,
    { creacteBo,getagenceById,getagences}
  )(AddBo);










