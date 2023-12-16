/*
        DEVOIR DE JAVASCRIPT

Comparaison de 4 (ou +) chauffeurs de taxi.
Création d’une page html contenant un body vide (aucun élément à l'intérieur).
A l’aide d’un constructeur d’objet, créer minimum 4 objets sur ce modèle :
nom
prenom
adresse_postale
[Latitude, longitude]
[nb_km_janvier, nb_km_fevrier, nb_km_mars,……, nb_km_decembre]

Présenter les 4 chauffeurs dans 4 paragraphes différents intégrés dans une div

Dans cette même div un dernier paragraphe contiendra un récapitulatif (le chauffeur qui à le plus de kilomètres, le moins, …)

Une deuxième div contiendra une cartographie des emplacements de chaque taxi

Une troisième div contiendra un graphique pour visualiser le nombre de kilomètres parcouru par chaque chauffeur

https://www.chartjs.org/docs/latest/samples/scales/linear-min-max-suggested.html
https://switch2osm.org/using-tiles/getting-started-with-leaflet/ 
*/

//      CREATION    DES   OBJETS  CHAUFFEURS

//Génère les kilomètres parcourus pour le mois
function genereKilometre() {
    let arrayKm = [];
    let i = 0;
    while (i < 12) {
        let kms = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
        arrayKm.push(kms)
        i++;
    }
    return arrayKm;
}

//Création des variables et constantes pour remplir les objets chauffeurs
let chauffeurDeTaxi = [];
const PRENOM_DES_CHAUFFEURS = ["Lucien", "Isabelle","Pierre","Sophie"]
const NOM_DES_CHAUFFEURS = ["Dubois", "Martin","Lefevre", "Renault"];
const ADRESSE_DES_CHAUFFEURS = ["20 rue des Chats", "10 rue des Oiseaux", "30 rue des Chênes", "40 Rue des Haricots"];
const ADRESSE_POSTALE_DES_CHAUFFEURS = [29200,29200,28203,29381];
const COORDONEES_DES_CHAUFFEURS = [[48.394375, -4.488199],[48.407873, -4.425606],[48.409013, -4.528584],[48.384393, -4.525838]];
const PHOTO_CHAUFFEUR = ["./img/Lucien.png", "./img/Isabelle.png", "./img/Pierre.png", "./img/Sophie.png"];
const DESCRIPTION_CHAUFFEUR = [
    "Bienvenue à bord du taxi de Lucien, le maître de la route au sourire contagieux. Avec une passion inébranlable pour la conduite et une connaissance encyclopédique de la ville, Lucien transforme chaque trajet en une aventure agréable. Sa courtoisie naturelle et son sens de l'humour rendent chaque course mémorable. Montez à bord avec Lucien pour une expérience de conduite exceptionnelle, où la destination devient aussi plaisante que le voyage.",

    "Rencontrez Isabelle, la conductrice de taxi au charme élégant et à l'esprit vif. En plus de naviguer habilement à travers la ville, Isabelle apporte une touche d'élégance à chaque trajet. Sa conversation captivante et son sens aigu du service à la clientèle garantissent une expérience de conduite à la fois raffinée et conviviale. Optez pour le taxi d'Isabelle pour une aventure urbaine empreinte de style et de sophistication.",

    "Embarquez avec Pierre, le conducteur de taxi dynamique et efficace qui fait de chaque déplacement une aventure rapide et fluide. Avec une connaissance approfondie des itinéraires les plus rapides et une conduite sûre, Pierre vous garantit d'arriver à destination sans encombre. Choisissez le taxi de Pierre pour une expérience de conduite sans tracas, où l'efficacité et le professionnalisme se conjuguent pour créer une expérience de trajet parfaitement orchestrée.",

    "Bienvenue dans le taxi de Sophie, une conductrice dévouée à vous offrir le meilleur voyage possible. Son attitude chaleureuse et sa prévenance naturelle créent une atmosphère accueillante à bord. Sophie est bien plus qu'une chauffeuse ; elle est votre guide amical à travers la ville. Optez pour le taxi de Sophie pour une expérience où la gentillesse et la compétence se rencontrent pour créer des souvenirs de trajet exceptionnels."
];

class CreerChauffeurDeTaxi {
    constructor(prenom, nom, adresse, adressePostale, coordonees, kmparcouru, photo, description) {
        this.prenom = prenom;
        this.nom = nom;
        this.adresse = adresse;
        this.adressePostale = adressePostale;
        this.coordonees = coordonees;
        this.kmparcouru = kmparcouru;
        this.photo = photo;
        this.description = description;
    }
}

//Insertion des objets chauffeurs dans un array
function genereChauffeurs() {
    let i = 0;

    while (i < 4) {
        let chauffeur = new CreerChauffeurDeTaxi(PRENOM_DES_CHAUFFEURS[i], NOM_DES_CHAUFFEURS[i], ADRESSE_DES_CHAUFFEURS[i], ADRESSE_POSTALE_DES_CHAUFFEURS[i], COORDONEES_DES_CHAUFFEURS[i], genereKilometre(), PHOTO_CHAUFFEUR[i], DESCRIPTION_CHAUFFEUR[i]);
        chauffeurDeTaxi.push(chauffeur);
        i++;
    }

}

//      CREATION    DE  LA  STRUCTURE   HTML

//Titres
const creationTitres = () => {
    //Div
    let divTitre = document.createElement("div");
    divTitre.setAttribute("class", "titre");
    document.body.appendChild(divTitre);
    let selectDivTitre = document.querySelector("div");
    //h1
    let titreUn = document.createElement("h1");
    titreUn.textContent = "Club Elysium"
    selectDivTitre.appendChild(titreUn);
    //h2
    let titreDeux = document.createElement("h2");
    titreDeux.textContent = "Se déplacer différement";
    selectDivTitre.appendChild(titreDeux);
}

//Création de 3 div
const creationDivDeStructure = () => {
    let i = 0;
    while ( i < 3) {
        const DIV = document.createElement('div');
        //CONTENT.textContent = "Test";
        DIV.setAttribute("id","div-" + (i+1));
        document.body.appendChild(DIV);
        i++;
    }
}

//Ajout des divs des chauffeurs à la div-1
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

//Contenu des divs chauffeurs
const contenuDivPresentationChauffeurs = () => {
    let i = 0;
    while (i < chauffeurDeTaxi.length) {
        const SELECT_DIV_CHAUFFEUR = document.getElementById("div-"+chauffeurDeTaxi[i].prenom);
        //Photo du chauffeur
        const IMG_CHAUFFEUR = document.createElement("img");
        IMG_CHAUFFEUR.src = chauffeurDeTaxi[i].photo;
        SELECT_DIV_CHAUFFEUR.appendChild(IMG_CHAUFFEUR);
        //Prénom et nom du chauffeur
        const P_PRENOM_NOM = document.createElement("p");
        P_PRENOM_NOM.textContent = chauffeurDeTaxi[i].prenom + " " + chauffeurDeTaxi[i].nom;
        SELECT_DIV_CHAUFFEUR.appendChild(P_PRENOM_NOM);
        //Adresse du chauffeur
        const P_ADRESSE = document.createElement("p");
        P_ADRESSE.textContent = chauffeurDeTaxi[i].adresse + ", " + chauffeurDeTaxi[i].adressePostale;
        SELECT_DIV_CHAUFFEUR.appendChild(P_ADRESSE);
        //Description du chauffeur
        const P_DESCRIPTION = document.createElement("p");
        P_DESCRIPTION.textContent = chauffeurDeTaxi[i].description;
        SELECT_DIV_CHAUFFEUR.appendChild(P_DESCRIPTION);
        i++;
    }
}
//Ajout récap des chauffeurs
const recapChauffeur = () => {
    let selectDiv = document.getElementById("div-1");
    let creerDiv = document.createElement("div");
    creerDiv.setAttribute("id", "recap");
    selectDiv.appendChild(creerDiv);
    let pRecap = document.createElement("p");
    let selectDivRecap = document.getElementById("recap");

    //Recherche le plus petit km parcouru
    const trouvePetitKm = () =>{
        let i=0;
        let array1 = [];
        while (i<chauffeurDeTaxi.length){
            let minKm = Math.min(...chauffeurDeTaxi[i].kmparcouru);;
            array1.push(minKm);
            i++
        }
        return array1;
    }
    //Associe le plus petit km avec un prénom+nom
    let minKm = Math.min(...trouvePetitKm());
    const associePetitKm = (x) => {
        let i=0;
        while (i<chauffeurDeTaxi.length){
            let minKm = Math.min(...chauffeurDeTaxi[i].kmparcouru);;
            if (minKm === x){
                return chauffeurDeTaxi[i].prenom+" "+chauffeurDeTaxi[i].nom;
            }
            i++;
        }
    }
    let nomMinKm = associePetitKm(minKm);
    //Recherche le plus grand km parcouru
    const trouveGrandKm = () =>{
        let i=0;
        let array1 = [];
        while (i<chauffeurDeTaxi.length){
            let maxKm = Math.max(...chauffeurDeTaxi[i].kmparcouru);;
            array1.push(maxKm);
            i++
        }
        return array1;
    }
    let maxKm = Math.max(...trouveGrandKm());
    //Associe le plus petit km avec un prénom+nom
    const associeGrandKm = (x) => {
        let i=0;
        while (i<chauffeurDeTaxi.length){
            let maxKm = Math.max(...chauffeurDeTaxi[i].kmparcouru);;
            if (maxKm === x){
                return chauffeurDeTaxi[i].prenom+" "+chauffeurDeTaxi[i].nom;
            }
            i++;
        }
    }
    let nomMaxKm = associeGrandKm(maxKm);


    pRecap.textContent = nomMinKm+" à réalisé cette année la plus courte distance dans un mois : " + minKm + " km, tandis que "+nomMaxKm+" à réalisé le plus grand nombre de km qui est de : "+maxKm+" km";
    selectDivRecap.appendChild(pRecap);
}

//Carte
function carteCreation() {
    //Assigne carte à la div-2
    let carte = L.map("div-2").setView([48.3789, -4.4816], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(carte);
    //Ajout des markers
    let i = 0
    while (i < chauffeurDeTaxi.length) {
        let marker = L.marker(chauffeurDeTaxi[i].coordonees).addTo(carte);
        marker.bindPopup(chauffeurDeTaxi[i].prenom +" "+ chauffeurDeTaxi[i].nom ).openPopup();
        i++;
    }
}

//Insertion div-3, le tableau
const creationChart = () => {
    const SELECT_DIV_3 = document.getElementById("div-3");
    let creationCanva = document.createElement("canvas");
    SELECT_DIV_3.appendChild(creationCanva);
    let canvaChart = document.querySelector("canvas");
    canvaChart.setAttribute("id", "Graphique");
    canvaChart.setAttribute("aria-label", "chart");
    canvaChart.setAttribute("role", "img");
}

//Graphique
const insertionGraphique = () => {
    const moisAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const monGraphique = document.getElementById("Graphique");
    const data = {
        labels: moisAnnee,
        datasets: [
            {
                label: chauffeurDeTaxi[0].prenom,
                data: chauffeurDeTaxi[0].kmparcouru,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },{
                label: chauffeurDeTaxi[1].prenom,
                data: chauffeurDeTaxi[1].kmparcouru,
                fill: false,
                borderColor: 'rgb(192, 75, 192)',
                tension: 0.1
            }, {
                label: chauffeurDeTaxi[2].prenom,
                data: chauffeurDeTaxi[2].kmparcouru,
                fill: false,
                borderColor: 'rgb(192, 192, 75)',
                tension: 0.1
            }, {
                label: chauffeurDeTaxi[3].prenom,
                data: chauffeurDeTaxi[3].kmparcouru,
                fill: false,
                borderColor: 'rgb(192, 192, 192)',
                tension: 0.1
            }
        ]
    }
    new Chart(monGraphique, {
        type: "line",
        data: data,
    });
};

//  LANCEMENT   DES  FONCTIONS

//Debug - vérifie la fonction genereKilometre
//console.log(genereKilometre());

genereChauffeurs();
//Debug - print l'array d'objets chauffeur
//for(const PRINT_OBJ of chauffeurDeTaxi) {
//    console.log(PRINT_OBJ);
//}

creationTitres();
creationDivDeStructure();
divPresentationChauffeurs();
contenuDivPresentationChauffeurs();
recapChauffeur();
carteCreation();
creationChart();
insertionGraphique();


