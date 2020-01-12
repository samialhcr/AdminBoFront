import axios from "axios";
import {
    GET_ERRORS,
    GET_ABONNES,
    GET_ABONNEBYID,
    GET_COMPTES,
    GET_ACOMPTEBYID,
    GET_CONTRATS,
    GET_CONTRATBYID,
    GET_COFFRES,
    GET_OFFREBYID,
    GET_BOS,
    GET_BOBYID,
    GET_AGENCES,
    GET_AGENCEBYID,
    GET_OPERATIONS,
    GET_OPERATIONBYID
  } from "./types";
import { async } from "q";

export const creacteAbonne = (abonne, history) => async dispatch => {
    try{
      const res = await axios.post("https://contratservice.herokuapp.com/api/abonne/save",abonne);
      history.push("/Listabonnee");
      history.push("/Listabonnebo");
    }catch(err){
      console.log("chi haja mahyach")

    }
};

export const updateAbon = (abonne, history) => async dispatch => {
  try{
    const res = await axios.put("https://contratservice.herokuapp.com/api/abonne/update",abonne);
    history.push("/Listabonnee");
    history.push("/Listabonnebo");
  }catch(err){
    console.log("chi haja mahyach")

  }
};


export const getabonnes = () => async dispatch => {
    const res = await axios.get(
      "https://contratservice.herokuapp.com/api/abonne/all"
    );
  
    dispatch({
      type: GET_ABONNES,
      payload: res.data
    });
  };


  export const getabonneById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/abonne/${id}`
    );
  
    dispatch({
      type: GET_ABONNEBYID,
      payload: res.data
    });
  };


    
  export const activateAbonne = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/abonne/activate/${id}`
    );
    history.push("/Listabonnee");
    history.push("/Listabonnebo");
  
  };

  export const desactivateAbonne = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/abonne/desactivate/${id}`
    );
    history.push("/Listabonnee");
    history.push("/Listabonnebo");
  
  };

  export const deleteabonne = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/abonne/delete/${id}`
    );
  
    history.push("/Listabonnee");
    history.push("/Listabonnebo");
  };

  export const getcomptes = () => async dispatch => {
    const res = await axios.get(
      "https://contratservice.herokuapp.com/api/compte/all"
    );
  
    dispatch({
      type: GET_COMPTES,
      payload: res.data
    });
  };


  export const getcompteById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/compte/${id}`
    );
  
    dispatch({
      type: GET_ACOMPTEBYID,
      payload: res.data
    });
  };

  export const deletecompte = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/compte/delete/${id}`
    );
  
    history.push("/ListCompte");
    history.push("/ListComptee");
  };
  export const creacteCompte = (compte, history) => async dispatch => {
    try{
      const res = await axios.post("https://contratservice.herokuapp.com/api/compte/save",compte);
      
      history.push("/ListCompte");
      history.push("/ListComptee");

    }catch(err){
      console.log("chi haja mahyach")
    }
};

export const updateCompte = (compte, history) => async dispatch => {
  try{
    const res = await axios.put("https://contratservice.herokuapp.com/api/compte/save",compte);
    
    history.push("/ListCompte");
    history.push("/ListComptee");

  }catch(err){
    console.log("chi haja mahyach")
  }
};
  
  export const getcontrats = () => async dispatch => {
    const res = await axios.get(
      "https://contratservice.herokuapp.com/api/contrat/all"
    );
  
    dispatch({
      type: GET_CONTRATS,
      payload: res.data
    });
  };

  export const getcontratsById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/contrat/${id}`
    );
  
    dispatch({
      type: GET_CONTRATBYID,
      payload: res.data
    });
  };

  export const deletecontrat = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/contrat/delete/${id}`
    );
  
    history.push("/ListContrat");
    history.push("/ListContratt");
  };


  export const getoffres = () => async dispatch => {
    const res = await axios.get(
      "https://contratservice.herokuapp.com/api/offre/all"
    );
  
    dispatch({
      type: GET_COFFRES,
      payload: res.data
    });
  };


  export const getoffreById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/offre/${id}`
    );
  
    dispatch({
      type: GET_OFFREBYID,
      payload: res.data
    });
  };

  export const deleteoffre = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/offre/delete/${id}`
    );
  
    history.push("/ListOffre");
    history.push("/ListOffree");
  };
  export const desactivateOffre = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/offre/desaactivateEtat/${id}`
    );
    history.push("/ListOffre");
    history.push("/ListOffree");
  
  };
  export const activateOffre = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://contratservice.herokuapp.com/api/offre/activateEtat/${id}`
    );
    history.push("/ListOffre");
    history.push("/ListOffree");
  
  };
  export const creacteOffre = (offre, history) => async dispatch => {
    try{
      const res = await axios.post("https://contratservice.herokuapp.com/api/offre/save",offre);
      
      history.push("/ListOffre");
      history.push("/ListOffree");
    }catch(err){
      console.log("chi haja mahyach")

    }
};
export const updateOffre = (offre, history) => async dispatch => {
  try{
    const res = await axios.put("https://contratservice.herokuapp.com/api/offre/update",offre);
   
    history.push("/ListOffre");
      history.push("/ListOffree");
  }catch(err){
    console.log("chi haja mahyach")

  }
};

  export const getBos = () => async dispatch => {
    const res = await axios.get(
      "https://administrationservice.herokuapp.com/admin/charges-clientel"
    );
  
    dispatch({
      type: GET_BOS,
      payload: res.data
    });
  };


  export const getBoById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://administrationservice.herokuapp.com/admin/charge-clientel/${id}`
    );
  
    dispatch({
      type: GET_BOBYID,
      payload: res.data
    });
  };
  export const deleteBo = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://administrationservice.herokuapp.com/admin/charge-clientel/delete/${id}`
    );
    history.push("/Listbo");
    history.push("/Listboo");

  };

  export const creacteBo = (bo, history) => async dispatch => {
    try{
      const res = await axios.post("https://administrationservice.herokuapp.com/admin/charge-clientel",bo);
      
      history.push("/Listbo");
      history.push("/Listboo");

    }catch(err){
      console.log("chi haja mahyach")
    }
};
export const updateBo = (bo, history) => async dispatch => {
  try{
    const res = await axios.put("https://administrationservice.herokuapp.com/admin/charge-clientel",bo);
    //history.push("/");

    history.push("/Listbo");
    history.push("/Listboo");
  }catch(err){
    console.log("chi haja mahyach")

  }
};


  export const getagences = () => async dispatch => {
    const res = await axios.get(
      "https://administrationservice.herokuapp.com/admin/agences"
    );
   
  /*  const res = await axios.get(
      "https://administrationservice.herokuapp.com/agences"
    );*/
    //res=res.stringify();
   // const result=JSON.stringify(res);
console.log(res);
  
    dispatch({
      type: GET_AGENCES,
      payload: res.data
    });
  };

  export const getagenceById = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://administrationservice.herokuapp.com/admin/agence/${id}`
    );
  
    dispatch({
      type: GET_AGENCEBYID,
      payload: res.data
    });
  };

  export const deleteagence = (id, history) => async dispatch => {
    const res = await axios.get(
      `https://administrationservice.herokuapp.com/admin/agence/delete/${id}`
    );

    history.push("/ListAgence");
    history.push("/ListAgencee");

  };

  export const creacteAgence = (agence, history) => async dispatch => {
    try{
      const res = await axios.post("https://administrationservice.herokuapp.com/admin/agence",agence);

   
     history.push("/ListAgencee");
     history.push("/ListAgence");

    }catch(err){

      console.log("chi haja mahyach")
    }
};

export const updateAgence = (agence, history) => async dispatch => {
  try{
    const res = await axios.put("https://administrationservice.herokuapp.com/admin/agence",agence);
    //history.push("/");

    history.push("/ListAgencee");
    history.push("/ListAgence");
  }catch(err){
    console.log("chi haja mahyach")

  }
};

export const countAgence = () => async dispatch => {
  const res = await axios.get(
    `https://administrationservice.herokuapp.com/admin/agence/countAgences`
  );

};

export const getabonnesAdm = () => async dispatch => {
  const res = await axios.get(
    "https://administrationservice.herokuapp.com/admin/abonnes"
  );

  dispatch({
    type: GET_ABONNES,
    payload: res.data
  });
};

export const getcontratsAdm = () => async dispatch => {
  const res = await axios.get(
    "https://administrationservice.herokuapp.com/admin/contrats"
  );

  dispatch({
    type: GET_CONTRATS,
      payload: res.data
  });
};
export const getcomptesAdm = () => async dispatch => {
  const res = await axios.get(
    "https://administrationservice.herokuapp.com/admin/comptes"
  );

  dispatch({
    type: GET_COMPTES,
    payload: res.data
  });
};
export const getoffresAdm = () => async dispatch => {
  const res = await axios.get(
    "https://administrationservice.herokuapp.com/admin/offres"
  );

  dispatch({
    type: GET_COFFRES,
    payload: res.data
  });
};
export const getoperationAdm = () => async dispatch => {
  const res = await axios.get(
    "https://administrationservice.herokuapp.com/admin/operations"
  );

  dispatch({
    type: GET_OPERATIONS,
    payload: res.data
  });
};








