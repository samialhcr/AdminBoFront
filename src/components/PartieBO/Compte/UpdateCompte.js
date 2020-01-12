import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteCompte,getcompteById,getcontrats,updateCompte} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class UpdateCompte extends React.Component {

  componentDidMount() {
    //recuperation de l'id de de bo
    const  id  = this.props.idCompte;
    console.log(id);
    this.props.getcompteById(id, this.props.history);
    this.props.getcontrats();

  }





  constructor(props) {
    super(props);

    this.state = {
 
        dateCreation:"",
        solde:"",
        contrat_compte: {
          codecontrat:""
        }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
}


componentWillReceiveProps(nextProps) {
  const {
    dateCreation,
    solde,

    contrat
  } = nextProps.compte.compte;
  this.setState({
    dateCreation,
    solde,

    contrat
  });
  this.state.contrat = nextProps.compte.compte.contrat;
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
   e.preventDefault();
    const newCompte = {
      dateCreation:this.state.dateCreation,
      solde:this.state.solde,
      contrat_compte: {
        codecontrat: this.state.codecontrat
     }
    };

    console.log(newCompte);
    this.props.updateCompte(newCompte, this.props.history);
  }

    
      
  render() {
    const { contrats } = this.props.contrat;
    const { contrat } = this.props.contrat;

    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;

  
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
                                <strong>Modification d'un Compte</strong> 
                            </div>
                            <div class="card-body card-block">
                               
                                <div class="form-group">
                                    <label class=" form-control-label">Date de Création</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                                        <input class="form-control" 
                                        name="dateCreation"
                                        value={this.state.dateCreation}
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
                                        name="solde"
                                        value={this.state.solde}
                                        onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 9999999</small>
                                </div>


                                <div class="form-group">
                                <select
                              id="disabledSelect"
                              
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="contrat_compte"
                              onChange={this.onChange.bind(this)}
                            >
                              <option 
                              value={this.state.contrat_compte}>
                                {compte.contrat_compte
                                  ? compte.contrat_compte.codecontrat
                                  : "en cours"}
                              </option>
                              {contrats.map(contrat => (
                                <option
                                  value={JSON.stringify(contrat)}
                                  key={contrat.codecontrat}
                                >
                                  {contrat.codecontrat}
                                </option>
                              ))}
                            </select>
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



  UpdateCompte.propTypes = {
    creacteCompte: PropTypes.func.isRequired,
    getcompteById: PropTypes.func.isRequired,
    getcontrats: PropTypes.func.isRequired,
    updateCompte: PropTypes.func.isRequired

  };

  const mapStateToProps = state => ({
    compte: state.compte,
    contrat: state.contrat

  });
 
  export default connect(
    mapStateToProps,
    { creacteCompte,getcompteById,getcontrats,updateCompte}
  )(UpdateCompte);












