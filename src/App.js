import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';

import ListBo from './components/Bo/ListBo';
import ListBoo from './components/Bo/ListBoo';
import ListAddBo from './components/Bo/ListAddBo';

import ListUpdateBo from './components/Bo/ListUpdateBo';

import ListAgence from './components/Agence/ListAgence';
import ListAgencee from './components/Agence/ListAgencee';
import ListAddAgence from './components/Agence/ListAddAgence';

import Listabonnebo from './components/PartieBO/Abonne/ListAbonne';
import ListAddAbonnebo from './components/PartieBO/Abonne/ListAddAbonne';
import Listabonnee from './components/PartieBO/Abonne/ListAbonnee';
import ListUpdateabonne from './components/PartieBO/Abonne/ListUpdateabonne';


import { Provider } from "react-redux";
import store from "./store";
import ListCompte from './components/PartieBO/Compte/ListCompte';
import ListComptee from './components/PartieBO/Compte/ListComptee';
import ListAddCompte from './components/PartieBO/Compte/ListAddCompte';
import ListUpdateCompte from './components/PartieBO/Compte/ListUpdateCompte'

import ListContrat from './components/PartieBO/Contrat/ListContrat';
import ListContratt from './components/PartieBO/Contrat/ListContratt';

import ListOffre from './components/PartieBO/Offre/ListOffre';
import ListOffree from './components/PartieBO/Offre/ListOffree';
import ListAddOffre from './components/PartieBO/Offre/ListAddOffre';
import ListUpdateOffre from './components/PartieBO/Offre/ListUpdateOffre';



import AjoutList from './components/PartieBO/Abonne/AjoutList';
import ListUpdateAgence from './components/Agence/ListUpdateAgence';

import Dashboard from './components/Dashboard'


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />


      <Route exact path="/Listbo" component={ListBo} />
      <Route exact path="/Listboo" component={ListBoo} />
      <Route exact path="/ListAddBo" component={ListAddBo} />
      <Route exact path="/ListUpdateBo/:id" component={ListUpdateBo} />

      <Route exact path="/ListAgence" component={ListAgence} />
      <Route exact path="/Listagencee" component={ListAgencee} />
      <Route exact path="/ListAddAgence" component={ListAddAgence} />

      <Route exact path="/Listabonnebo" component={Listabonnebo} />
      <Route exact path="/ListAddAbonnebo" component={ListAddAbonnebo} />
      <Route exact path="/Listabonnee" component={Listabonnee} />
      <Route exact path="/ListUpdateabonne/:id" component={ListUpdateabonne} />
      

      <Route exact path="/ListCompte" component={ListCompte} />
      <Route exact path="/ListComptee" component={ListComptee} />
      <Route exact path="/ListAddCompte" component={ListAddCompte} />
      <Route exact path="/ListUpdateCompte/:idCompte" component={ListUpdateCompte} />
      
      

      <Route exact path="/ListContrat" component={ListContrat} />
      <Route exact path="/ListContratt" component={ListContratt} />

      <Route exact path="/ListOffre" component={ListOffre} />
      <Route exact path="/ListOffree" component={ListOffree} />
      <Route exact path="/ListAddOffre" component={ListAddOffre} />
      <Route exact path="/ListUpdateOffre/:id_Offre" component={ListUpdateOffre} />
      
      

      <Route exact path="/AjoutList" component={AjoutList} />

      <Route exact path="/ListUpdateAgence/:id" component={ListUpdateAgence} />


      <Route exact path="/dashbord" component={Dashboard} />
      

    </div>
    </Router>
    </Provider>
  );
}

export default App;
