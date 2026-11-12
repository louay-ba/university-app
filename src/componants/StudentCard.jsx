import { useState } from "react";


function StudentCard(props) {
  const ville = props.ville || "non renseignée";
  const [cordoneesvisibles,setcordoneesvisibles]= useState(false);
  function basculerinforamtion(){
    setcordoneesvisibles(!cordoneesvisibles);
  }
  return (
    <div className="StudentCard" >
      <img className="photo" src={props.img} alt="photo étudiant" />
      <h1>Fiche étudiant</h1>
      <p><b>Nom & Prénom : </b>{props.np}</p>
      {cordoneesvisibles && 
      (<>
      <p><b>Email : </b>{props.email}</p>
      <p><b>Téléphone : </b>{props.tel}</p>
      </>)
      }
      
      <p><b>Filiére : </b>{props.filiere}</p>
      <p><b>Année d'étude : </b>{props.annetu}</p>
      <p><b>Groupe : </b>{props.grp}</p>
      <p><b>Ville : </b>{props.ville}</p>
      <button className='bouton' onClick={() => window.location.href = "mailto:touhemi200@gmail.com"}>contacter</button>
      <button onClick={basculerinforamtion} >
        {cordoneesvisibles
        ? "masque les informations"
        :"afficher les informations"}
      </button>
      <button onClick={() => props.onSupprimer(props.email)}>
        Supprimer
      </button>
      <button onClick={() => props.onModifier(props.email)}>
        Modifier
      </button>
    </div>
  );
}
export default StudentCard;