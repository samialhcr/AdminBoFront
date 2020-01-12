import React from "react";
import { Link } from "react-router-dom";
import {countAgence,getagences,getBos,getabonnesAdm,getcontratsAdm,
    getcomptesAdm,getoffresAdm,getoperationAdm} from "../actions/projectActions"

import { connect } from "react-redux";


import PropTypes from "prop-types";

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getagences();
        this.props.getBos();
        this.props.getabonnesAdm();
        this.props.getcontratsAdm();
        this.props.getcomptesAdm();
        this.props.getoffresAdm();
        this.props.getoperationAdm();
      }

      constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }


  
  render() {
    const { agences } = this.props.agence;
    const { agence } = this.props.agence;
    const nbagence = agences.length;

    const { bos } = this.props.bo;
    const nbBo = bos.length;

    const { abonnes } = this.props.abonne;
    const nbabonne = abonnes.length;

    const { contrats } = this.props.contrat;
    const nbcontrat = contrats.length;

    const { comptes } = this.props.compte;
    const nbcompte = comptes.length;

    const { offres } = this.props.offre;
    const nboffre = offres.length;

    const { operations } = this.props.operation;
    const nboperation = operations.length;

return(



<body>



<aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">

        <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="./"><img src="images/logo.png" alt="Logo"></img></a>
            <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"></img></a>
        </div>

        <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">
            <li class="active">
                <Link to={`/dashbord`}>
                    <a href="index.html"> <i class="menu-icon fa fa-dashboard"></i>Acceuil </a>
                </Link>
                </li>
                <h3 class="menu-title">Partie ADMIN</h3>

                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-user"></i>Gestion des Bo</a>
                    <ul class="sub-menu children dropdown-menu">

                    <Link to={`/Listbo`}>
                   <li> <i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                   </Link>
                     <Link to={`/ListAddBo`}> 
                    <li><i class="menu-icon fa fa-plus"></i><a href="ui-buttons.html">Ajouter</a></li>
                    </Link> 
                    </ul>
                </li>
                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-laptop"></i>Gestion des Agences</a>
                    <ul class="sub-menu children dropdown-menu">
                    <Link to={`/Listagence`}>
                         <li><i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                         </Link>  
                    <Link to={`/ListAddAgence`}>
                        <li><i class="menu-icon fa fa-plus"></i><a href="ui-buttons.html">Ajouter</a></li>
                        </Link>
                    </ul>
                </li>

                <h3 class="menu-title">Deconnexion</h3>

<li class="menu-item-has-children dropdown">
    <a href="/" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-user"></i>Deconnexion</a>
    <ul class="sub-menu children dropdown-menu">

    <Link to={`/`}>
   <li> <i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Deconnexion</a></li>
   </Link>
   
    </ul>
</li>

               
               

               
            </ul>
        </div>
    </nav>
</aside>



<div id="right-panel" class="right-panel">

    
    <header id="header" class="header">

        <div class="header-menu">

            <div class="col-sm-7">
                <a id="menuToggle" class="menutoggle pull-left"><i class="fa fa fa-tasks"></i></a>
                <div class="header-left">

       
                </div>
            </div>

            <div class="col-sm-5">
                <div class="user-area dropdown float-right">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="user-avatar rounded-circle" src="images/addd.jfif" alt="User Avatar"></img>
                    </a>

                    <div class="user-menu dropdown-menu">


                        <a class="nav-link" href="#"><i class="fa fa-power-off"></i> Deconnexion</a>
                    </div>
                </div>



            </div>
        </div>

    </header>
    

    <div class="breadcrumbs">
        <div class="col-sm-4">
            <div class="page-header float-left">
                <div class="page-title">
                    <h1> Acceuil</h1>
                </div>
            </div>
        </div>

        
    </div>

    <div class="content mt-3">

            <div class="col-sm-12">
                <div class="alert  alert-success alert-dismissible fade show" role="alert">
                    <span class="badge badge-pill badge-success">Success</span> Mis a jour avec succes de votre Dashboard.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-user text-primary border-primary"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">Nombre de Bo</div>
                                <div class="stat-digit">
                                {nbBo}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="stat-widget-one">
                        <div class="stat-icon dib"><i class="ti-layout-grid2 text-warning border-warning"></i></div>
                        <div class="stat-content dib">
                            <div class="stat-text">Nombre d'agences</div>
                            <div class="stat-digit" >
                                {nbagence}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-xl-4 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="stat-widget-one">
                        <div class="stat-icon dib"><i class="ti-user"></i></div>
                        <div class="stat-content dib">
                            <div class="stat-text">Nombre d'abonnes</div>
                            <div class="stat-digit" >
                                {nbabonne}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-md-6 col-lg-6">
        <div class="card bg-flat-color-1 text-light">
            <div class="card-body">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <div class="h4 m-0">{nboperation}</div>
                <div>les operations...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width: '20%'},{height: '5px'} } ></div>
                <small class="text-light">La liste des operations.</small>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-6">
        <div class="card bg-flat-color-4 text-light">
            <div class="card-body">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <div class="h4 m-0">{nboffre}</div>
                <div>les offres...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width: '20%'},{height: '5px'} }></div>
                <small class="text-light">La liste des offres.</small>
            </div>
        </div>
    </div>
    

    <div class="col-sm-12 mb-4">
        <div class="card-group">
            <div class="card col-md-6 no-padding ">
                <div class="card-body">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="fa fa-users"></i>
                    </div>

                    <div class="h4 mb-0">
                        <span class="count">{nbabonne}</span>
                    </div>

                    <small class="text-muted text-uppercase font-weight-bold">Abonnes</small>
                    <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" ></div>
                </div>
            </div>
            <div class="card col-md-6 no-padding ">
                <div class="card-body">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="fa fa-user-plus"></i>
                    </div>
                    <div class="h4 mb-0">
                        <span class="count">{nbBo}</span>
                    </div>
                    <small class="text-muted text-uppercase font-weight-bold">chargés clientèles</small>
                    <div class="progress progress-xs mt-3 mb-0 bg-flat-color-2" ></div>
                </div>
            </div>
            <div class="card col-md-6 no-padding ">
                <div class="card-body">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="fa fa-cart-plus"></i>
                    </div>
                    <div class="h4 mb-0">
                        <span class="count">{nbcompte}</span>
                    </div>
                    <small class="text-muted text-uppercase font-weight-bold">Comptes</small>
                    <div class="progress progress-xs mt-3 mb-0 bg-flat-color-3" ></div>
                </div>
            </div>
            <div class="card col-md-6 no-padding ">
                <div class="card-body">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="fa fa-pie-chart"></i>
                    </div>
                    <div class="h4 mb-0">
                        <span class="count">{nbcontrat}</span>
                    </div>
                    <small class="text-muted text-uppercase font-weight-bold">Contrats</small>
                    <div class="progress progress-xs mt-3 mb-0 bg-flat-color-4" ></div>
                </div>
            </div>
            <div class="card col-md-6 no-padding ">
                <div class="card-body">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="fa fa-clock-o"></i>
                    </div>
                    <div class="h4 mb-0">{this.state.date}</div>
                    <small class="text-muted text-uppercase font-weight-bold">Date</small>
                    <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" ></div>
                </div>
            </div>
           
        </div>
    </div>
            

           

</div>

    

   
   
    
    
</div>



</body>



);   
    }
  }
;

Dashboard.propTypes = {

    agence: PropTypes.object.isRequired,
    countAgence: PropTypes.func.isRequired,
    getagences: PropTypes.func.isRequired,
    getBos:PropTypes.func.isRequired,
    getabonnesAdm:PropTypes.func.isRequired,
    getcontratsAdm:PropTypes.func.isRequired,
    getcomptesAdm:PropTypes.func.isRequired,
    getoffresAdm:PropTypes.func.isRequired,
    getoperationAdm:PropTypes.func.isRequired

  };

  const mapStateToProps = state => ({
    agence: state.agence,
    bo:state.bo,
    abonne:state.abonne,
    contrat:state.contrat,
    compte:state.compte,
    offre:state.offre,
    operation:state.operation
  });


export default connect(
    mapStateToProps,
    { countAgence,getagences,getBos,getabonnesAdm,getcontratsAdm,getcomptesAdm,getoffresAdm,getoperationAdm}
  )(Dashboard);

