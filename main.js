/*
    DEVOIR DE JAVASCRIPT
Comparaison de 4 ou + chauffeurs de taxi
Page html body vide, 
constructeur objet créer 4 objets sur ce modèle:
nom
prenom
adresse_postale
[latitude,longitude]
[nb_km_janvier,...,nm_km_decembre]

présenter 4 chauffeurs dans une div + récap (qui à + de km, - de km, etc)

deuxième div cartographie emplacement taxis

troisième div graphique visualisation des km parcourus
*/

// CREATION DES OBJETS CHAUFFEURS

//Génère les kilomètres parcourus pour le mois
function genereKilometre() {
    let kms = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
    return kms;
}

//Création des variables et constantes pour remplir les objets chauffeurs
let chauffeurDeTaxi = [];
const PRENOM_DES_CHAUFFEURS = ["Lucien", "Isabelle","Pierre","Sophie"]
const NOM_DES_CHAUFFEURS = ["Dubois", "Martin","Lefevre", "Renault"];
const ADRESSE_DES_CHAUFFEURS = ["20 rue des Chats", "10 rue des Oiseaux", "30 rue des Chênes", "40 Rue des Haricots"];
const ADRESSE_POSTALE_DES_CHAUFFEURS = [29200,29200,28203,29381];
const COORDONEES_DES_CHAUFFEURS = [[10,20],[20,10],[30,40],[40,30]];
let kmDesChauffeurs = [
    genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre(), genereKilometre()
];

class CreerChauffeurDeTaxi {
    constructor(prenom, nom, adresse, adressePostale, coordonees, kmparcouru) {
        this.prenom = prenom;
        this.nom = nom;
        this.adresse = adresse;
        this.adressePostale = adressePostale;
        this.coordonees = coordonees;
        this.kmparcouru = kmparcouru;
    }
}

//Insertion des objets chauffeurs dans un array
function genereChauffeurs() {
    let i = 0;

    while (i < 4) {
        let chauffeur = new CreerChauffeurDeTaxi(PRENOM_DES_CHAUFFEURS[i], NOM_DES_CHAUFFEURS[i], ADRESSE_DES_CHAUFFEURS[i], ADRESSE_POSTALE_DES_CHAUFFEURS[i], COORDONEES_DES_CHAUFFEURS[i], kmDesChauffeurs);
        chauffeurDeTaxi.push(chauffeur);
        i++;
    }

}

//  CREATION DE LA STRUCTURE HTML
//Définit le nombre de div souhaité
const NOMBRE_DIV = 3;
//Création de x div
const creationDivDeStructure = () => {
    let i = 0;
    while ( i < NOMBRE_DIV) {
        const DIV = document.createElement('div');
        //CONTENT.textContent = "Test";
        DIV.setAttribute("id","div-" + (i+1));
        document.body.appendChild(DIV);
        i++;
    }
}

//Ajout des données des chauffeurs à la div-1
const divPresentationChauffeurs = () => {
    let i = 0;
    const SELECT_DIV_1 = document.getElementById("div-1");
    while (i < chauffeurDeTaxi.length) {
        const CONTENT = document.createElement("div");
        //CONTENT.textContent = "Test";
        CONTENT.setAttribute("id","div-" + chauffeurDeTaxi[i].prenom)
        CONTENT.setAttribute("class", "Carte-Chauffeur");
        SELECT_DIV_1.appendChild(CONTENT);
        i++;
    }
}

const contenuDivPresentationChauffeurs = () => {
    let i = 0;
    while (i < chauffeurDeTaxi.length) {
        //Prénom et nom du chauffeur
        const SELECT_DIV_CHAUFFEUR = document.getElementById("div-"+chauffeurDeTaxi[i].prenom);
        const P_PRENOM_NOM = document.createElement("p");
        P_PRENOM_NOM.textContent = chauffeurDeTaxi[i].prenom + " " + chauffeurDeTaxi[i].nom;
        SELECT_DIV_CHAUFFEUR.appendChild(P_PRENOM_NOM);
        //Adresse du chauffeur
        const P_ADRESSE = document.createElement("p");
        P_ADRESSE.textContent = chauffeurDeTaxi[i].adresse + ", " + chauffeurDeTaxi[i].adressePostale;
        SELECT_DIV_CHAUFFEUR.appendChild(P_ADRESSE);
        i++;
    }
}

//  LANCEMENT DES  FONCTIONS

//Debug - vérifie la fonction genereKilometre
console.log(genereKilometre());

genereChauffeurs();
//Debug - print l'array d'objets chauffeur
for(const PRINT_OBJ of chauffeurDeTaxi) {
    console.log(PRINT_OBJ);
}

creationDivDeStructure();
divPresentationChauffeurs();
contenuDivPresentationChauffeurs();
