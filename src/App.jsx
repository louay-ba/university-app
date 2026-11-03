import "./App.css";
import StudentCard from "C:/framework/university-app/src/componants/StudentCard.jsx";
import studentImage from "C:/framework/university-app/src/assets/student.jpg";

const etudiants = [
  {
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: studentImage,
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et Systèmes d'Information",
  },
];

function App() {
  return (
    <div className="container">
      <StudentCard
        prenom={etudiant.prenom}
        nom={etudiant.nom}
        email={etudiant.email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        anneeEtude={etudiant.anneeEtude}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
      />
    </div>
  );
}

export default App;