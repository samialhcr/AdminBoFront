import React from "react";
import { Link } from "react-router-dom";
import TableOffre from "./TableOffre";

class ListOffree extends React.Component {
  
  render() {
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
                    <a href="index.html"> <i class="menu-icon fa fa-dashboard"></i>Acceuil </a>
                </li>
                <h3 class="menu-title">Partie Bo</h3>
                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-user"></i>Gestion des Abonnées</a>
                    <ul class="sub-menu children dropdown-menu">

                    <Link to={`/Listabonnebo`}>
                        <li><i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                        </Link>

                    <Link to={`/AjoutList`}>
                        <li><i class="menu-icon fa fa-plus"></i><a href="ui-buttons.html">Ajouter</a></li>
                        </Link>
               
                    </ul>
                </li>

                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-money"></i>Gestion des Comptes</a>
                    <ul class="sub-menu children dropdown-menu">

                    <Link to={`/ListCompte`}>
                        <li><i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                        </Link>

                    <Link to={`/ListAddCompte`}>
                        <li><i class="menu-icon fa fa-plus"></i><a href="ui-buttons.html">Ajouter</a></li>
                        </Link>
               
                    </ul>
                </li>

                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-align-justify"></i>Gestion des Contrats</a>
                    <ul class="sub-menu children dropdown-menu">

                    <Link to={`/ListContrat`}>
                        <li><i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                        </Link>


               
                    </ul>
                </li>

                <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-files"></i>Gestion des Offres</a>
                    <ul class="sub-menu children dropdown-menu">

                    <Link to={`/ListOffre`}>
                        <li><i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Lister</a></li>
                        </Link>

                    <Link to={`/ListAddOffre`}>
                        <li><i class="menu-icon fa fa-plus"></i><a href="ui-buttons.html">Ajouter</a></li>
                        </Link>
               
                    </ul>
                </li>


                <h3 class="menu-title">Deconnection</h3>

<li class="menu-item-has-children dropdown">
    <a href="/" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon ti-user"></i>Se Deconnecter</a>
    <ul class="sub-menu children dropdown-menu">

    <Link to={`/`}>
   <li> <i class="menu-icon fa fa-list"></i><a href="ui-buttons.html">Se Deconnecter</a></li>
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


                        <a class="nav-link" href="#"><i class="fa fa-power-off"></i> Logout</a>
                    </div>
                </div>



            </div>
        </div>

    </header>
    

    <div class="breadcrumbs">
        <div class="col-sm-4">
            <div class="page-header float-left">
                <div class="page-title">
                    <h1>Espace Charge Clientel</h1>
                </div>
            </div>
        </div>

        <TableOffre history={this.props.history} />
    </div>

   
   

    
</div>



</body>
);   
    }
  }
;


export default ListOffree;
