import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {

    creacteOffre,getoffreById,updateOffre} from "../../../actions/projectActions"
import PropTypes from "prop-types";

import classnames from "classnames";


class UpdateOffre extends React.Component {

    componentDidMount() {
        //recuperation de l'id de la demande
        const  id  = this.props.id_Offre;
        console.log(id);
        this.props.getoffreById(id, this.props.history);
    
      }

    constructor(props) {
        super(props);
    
        this.state = {
            id_Offre:"",
            dateDebut:"",
            dateFin:"",
            etatOffre:"",
            choisi:""
            
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
        const {
            id_Offre,
            dateDebut,
            dateFin,
            etatOffre,
            choisi
        } = nextProps.offre.offre;
        this.setState({
            id_Offre,
            dateDebut,
            dateFin,
            etatOffre,
            choisi

        });
    
      }

     onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        const newOffre = {
            id_Offre:this.state.id_Offre,
            dateDebut:this.state.dateDebut,
            dateFin:this.state.dateFin,
            etatOffre:this.state.etatOffre,
            choisi:this.state.choisi
        };

        console.log(newOffre);
        this.props.updateOffre(newOffre, this.props.history);
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
                                <strong>Modification d'Offre</strong> 
                            </div>
                            <div class="card-body card-block">
                            <div class="form-group">
                                    <label class=" form-control-label">Id Offre</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-money"></i></div>
                                        <input class="form-control"
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
                                        <input class="form-control" 
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
                                        <input class="form-control" 
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

  UpdateOffre.propTypes = {
    creacteOffre: PropTypes.func.isRequired,
    getoffreById:PropTypes.func.isRequired,
    updateOffre:PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    offre: state.offre

  });

 
  export default connect(
    mapStateToProps,
    { creacteOffre,getoffreById,updateOffre}
  )(UpdateOffre);














