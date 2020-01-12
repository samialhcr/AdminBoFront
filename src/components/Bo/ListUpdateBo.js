import React from "react";
import { Link } from "react-router-dom";
import AddBo from "./AddBo";
import UpdateBo from "./UpdateBo";

class ListUpdateBo extends React.Component {
  
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
                    <h1>Modification de charge Clientèle</h1>
                </div>
            </div>
        </div>

        
    </div>

   
   
    <UpdateBo  id={this.props.match.params.id} history={this.props.history}/>
    
</div>



</body>
);   
    }
  }
;


export default ListUpdateBo;
