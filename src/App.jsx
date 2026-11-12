import './App.css';
import StudentCard from "./components/StudentCard.jsx";
import stu1img from "./assets/imagepdp.jpeg";
import { useState } from 'react';


function App() {
  
  const [etudiants , setEtudiants ] = useState([
  {
    np:"Touhemi Ben Swayah",
    img:stu1img,
    email : "touhemi200@gmail.com",
    tel : "+216 23 499 645" ,
    filiere : "Génie Logiciel et Systèmes d'information"  ,
    annetu : "2026/2027" ,
    grp : "GLSI 2 C" ,
    ville : "Mahdia" 
  },
  {
    np:"louay ben amor",
    img:stu1img,
    email : "loluaybenamor@gmail.com",
    tel : "+216 29 544 071" ,
    filiere : "Génie Logiciel et Systèmes d'information"  ,
    annetu : "2026/2027" ,
    grp : "GLSI 2 C" ,
    ville : "Mahdia" 
  },
  {
    np:"mansour swissi",
    img:stu1img,
    email : "mansour@gmail.com",
    tel : "+216 99 999 999" ,
    filiere : "Internet des objects"  ,
    annetu : "2026/2027" ,
    grp : "GLSI 2 C" ,
    ville : "Mahdia" 
  }
  ]);  


  function ajouterEtudiant() {
    const nouvelEtudiant={
    np:"rayen abdelli",
    img:stu1img,
    email : "rayen@gmail.com",
    tel : "+216 99 999 999" ,
    filiere : "Internet des objects"  ,
    annetu : "2026/2027" ,
    grp : "GLSI 2 C" ,
    ville : "Mahdia"};
    setEtudiants([...etudiants , nouvelEtudiant]);
  };
  
  const supprimeretudiant = (email) =>{
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));
  };
  
  const modifieretudiant = (email) =>{
    let nnp=prompt("donner le nom et prenom:");
    nnp=nnp.trim();
    if (nnp!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,np : nnp} : etudiant));
    }

    let nmail=prompt("donner le mail:");
    nnp=nnp.trim();
    if (nnp!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,np : nnp} : etudiant));
    }

    let ntel=prompt("donner le numero:");
    ntel=ntel.trim();
    if (ntel!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,tel : ntel} : etudiant));
    }

    let nf=prompt("donner la filiere:");
    nf=nf.trim();
    if (nf!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,filiere : nf} : etudiant));
    }

    let na=prompt("donner la date naissence:");
    na=na.trim();
    if (na!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,annetu : na} : etudiant));
    }

    let ng=prompt("donner le groupe:");
    ng=ng.trim();
    if (ng!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,groupe : ng} : etudiant));
    }

    let nv=prompt("donner la ville:");
    nv=nv.trim();
    if (nv!==""){
      setEtudiants(etudiants.map((etudiant) => etudiant.email === email ? {...etudiant,ville : nv} : etudiant));
    }

    
   
  };
  const [recherche , setRecherche] = useState("");
  const etudiantsfilter =etudiants.filter((etudiant) => 
  etudiant.np.toLowerCase().includes(recherche.toLowerCase()) ||
  etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()) 
  );
  return (
    <div className='container'>
      <header className="App-header">
      <nav className='actions'>
        <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        <input type="text" placeholder="Rechercher..." value={recherche} onChange={(etudiant) => setRecherche(etudiant.target.value)} />
      </nav>
      </header>
      {etudiantsfilter.map((etudiant) =>(
        <StudentCard 
          img = {etudiant.img}
          np = {etudiant.np}
          email = {etudiant.email}
          tel = {etudiant.tel}
          filiere = {etudiant.filiere}
          annetu = {etudiant.annetu}
          grp = {etudiant.grp}
          ville = {etudiant.ville}
          key = {etudiant.email}
          
          onSupprimer={supprimeretudiant}
          onModifier={modifieretudiant}
          />
          )
          )
      }
    </div>
  );
}

export default App;