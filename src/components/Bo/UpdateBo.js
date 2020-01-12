import React from "react";

import { Link } from "react-router-dom";


import PropTypes from "prop-types";

import {creacteBo,getagenceById,getagences,getBoById,updateBo} from  "../../actions/projectActions"

import { connect } from "react-redux";



class UpdateBo extends React.Component {

  componentDidMount() {
    //recuperation de l'id de de bo
    const  id  = this.props.id;
    console.log(id);
    this.props.getBoById(id, this.props.history);
    this.props.getagences();

  }



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
             id:""
           }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

    componentWillReceiveProps(nextProps) {
      const {
        id,
        email,
        username,
        password,
        cin,
        prenom,
        nom,
        numTel,
        agence
      } = nextProps.bo.bo;
      this.setState({
        id,
        email,
        username,
        password,
        cin,
        prenom,
        nom,
        numTel,
        agence
      });
      this.state.agence = nextProps.bo.bo.agence;
    }



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        const updateBo = {
            id:this.state.id,
            email:this.state.email,
            username:this.state.username,
            password: this.state.password,
            cin:this.state.cin,
            prenom:this.state.prenom,
            nom: this.state.nom,
            numTel:this.state.numTel,
           //agence:this.state.agence,
           agence: JSON.parse(this.state.agence)
        };

        //this.props.getagenceById(this.state.agence, this.props.history);
       
        console.log(updateBo);
        this.props.updateBo(updateBo, this.props.history);
      }
  

  render() {

    const { bos } = this.props.bo;
    const { bo } = this.props.bo;
    const{agences}= this.props.agence;
    const{agence}= this.props.agence;
  
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
                                    <label class=" form-control-label">Id</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-male"></i></div>
                                        <input class="form-control"
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
                                         name="cin"
                                         value={this.state.cin}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 99999</small>
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
                                    <small class="form-text text-muted">ex. Yyyyy</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Nom d'utilisteur</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                                        <input class="form-control"
                                         name="username"
                                         value={this.state.username}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. Xxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Mot de passe</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                                        <input class="form-control"
                                         name="password"
                                         value={this.state.password}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. *******</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Mail</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                                        <input class="form-control"
                                         name="email"
                                         value={this.state.email}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. xxxxxx@mail.com</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Numero de Telephone</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-credit-card"></i></div>
                                        <input class="form-control"
                                         name="numTel"
                                         value={this.state.numTel}
                                         onChange={this.onChange.bind(this)}
                                        ></input>
                                    </div>
                                    <small class="form-text text-muted">ex. 066666666</small>
                                </div>
                                
                                <div class="form-group">
                                <label class=" form-control-label">Agence</label>
                                <select
                              id="disabledSelect"
                              
                              class="form-control"
                              data-placeholder="Choose a Number..."
                              defaultValue={"-1"}
                              tabIndex="1"
                              name="agence"
                              onChange={this.onChange.bind(this)}
                            >
                              <option 
                              value={this.state.agence}>
                                {bo.agence
                                  ? bo.agence.id
                                  : "en cours"}
                              </option>
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

  UpdateBo.propTypes = {
    updateDemande: PropTypes.func.isRequired,
  bo: PropTypes.object.isRequired,
    creacteBo: PropTypes.func.isRequired,
    getagenceById:PropTypes.func.isRequired,
    agence: PropTypes.object.isRequired,
    getagences:PropTypes.func.isRequired,
    getBoById:PropTypes.func.isRequired,
    updateBo:PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    agence: state.agence,
    bo:state.bo

  });
 
  export default connect(
    mapStateToProps,
    { creacteBo,getagenceById,getagences,getBoById,updateBo}
  )(UpdateBo);










