import React from "react";
import { Link } from "react-router-dom";

import TableBo from "./TableBo";

class ListBo extends React.Component {
  
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

    

    

    <div class="breadcrumbs">
        <div class="col-sm-4">
            <div class="page-header float-left">
                <div class="page-title">
                    <h1>Espace Admin</h1>
                </div>
            </div>
        </div>

        <TableBo  history={this.props.history}/>
    </div>

   
   

    
</div>



</body>
);   
    }
  }
;


export default ListBo;
