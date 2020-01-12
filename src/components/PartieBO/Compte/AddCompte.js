import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteCompte,getcontrats} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class AddCompte extends React.Component {

  componentDidMount() {
    this.props.getcontrats();
  }

  constructor(props) {
    super(props);

    this.state = {
 
        dateCreation:"",
        solde:"",
        contrat_compte: {
        
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
    const newCompte = {
      dateCreation:this.state.dateCreation,
      solde:this.state.solde,
      contrat_compte:this.state.contrat_compte,
      contrat_compte: JSON.parse(this.state.contrat_compte)

    };

    console.log(newCompte);
    this.props.creacteCompte(newCompte, this.props.history);
  }

    
      
  render() {

    const { contrats } = this.props.contrat;
    const { contrat } = this.props.contrat;
  
      return (
        

        <div className="content mt-3">
            
            <div className="animated fadeIn">
              <form >
                <div className="row">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <div class="col-xs-6 col-sm-6">
                        

                    
                        <div class="card">
                            

                        <div className="card-header">
                                <strong>Ajout d'un Compte</strong> 
                            </div>
                            <div class="card-body card-block">
                               
                                <div class="form-group">
                                    <label class=" form-control-label">Date de Création</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control" type="Date"
                                        required
                                        name="dateCreation"
                                        value={this.state.idateCreationd}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                        <small class="form-text text-muted">ex. 99/99/9999</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Solde</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-money"></i></div>
                                        <input class="form-control"
                                        required
                                        name="solde"
                                        value={this.state.solde}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 9999999DH</small>
                                </div>

                                <div class="form-group">
                                <select
                              id="select"
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="contrat_compte"
                              onChange={this.onChange.bind(this)}
                              required
                            >
                              <option value={null}>Choisir un Code Contrat...</option>
                              {contrats.map(contrat => (
                                <option
                                  value={JSON.stringify(contrat)}
                                  key={contrat.codecontrat}
                                >
                                  {contrat.codecontrat}
                                </option>
                              ))}
                            </select>
                            <small class="form-text text-muted">ex. 999</small>
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



  AddCompte.propTypes = {
    creacteCompte: PropTypes.func.isRequired,
    getcontrats: PropTypes.func.isRequired

  };

  const mapStateToProps = state => ({
    contrat: state.contrat

  });

 
  export default connect(
    mapStateToProps,
    { creacteCompte,getcontrats}
  )(AddCompte);












