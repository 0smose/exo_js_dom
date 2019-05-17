function changeTitles() {
	var title = document.getElementsByTagName('h1')[0];
	title.innerHTML = "Ce que j'ai appris à THP";

	var title2 = document.querySelectorAll("p.lead");
	title2[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();


function changeCallToActions() {
	var button1 = document.querySelectorAll("a.btn-primary");
	button1[0].textContent = "OK je veux tester ";

	var url = document.querySelectorAll("a.btn-primary")[0].href = "http://www.thehackingproject.org";

	var button2 = document.querySelectorAll("a.btn-secondary");
	button2[0].textContent = "Non merci";

	var url2 = document.querySelectorAll("a.btn-secondary")[0].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();

function changeLogoName() {
	var logo = document.getElementsByTagName("strong");
	logo[0].innerHTML = "The THP Experience";
	logo[0].style.fontSize = "2em";
}
changeLogoName();

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

	var img = document.querySelectorAll("img.card-img-top");
	imagesArray.forEach((value, index) =>{
		img[index].src = value;
	});

}
populateImages();

function deleteLastCards() {
	for(i = 0; i <= 6; i++) {
	var card = document.querySelectorAll("div.row")[1];
	//let child = card.lastChild;

	card.removeChild(card.lastChild); 
}};
deleteLastCards();


function changeCardsText() {
	
	let array = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	var test = document.querySelectorAll('p.card-text');
	array.forEach((value, index) =>{
		test[index].textContent = value;
});
}

changeCardsText();

function changeViewButtons() {
var lala= document.querySelectorAll('div.btn-group');


for(i = 0;i<6;i++) {
lala[i].children[0].classList.remove('btn-outline-secondary'); 
lala[i].children[0].classList.add('btn-success'); 
}}

changeViewButtons();

function blaBla() {
	var tg = document.querySelectorAll('div.container')[3];
	console.log(tg[3]);
	var createe = document.createElement('div');
	createe.className = "row";
  tg.appendChild(createe);
 console.log(tg);
var card = tg.getElementsByClassName("row")[0].childNodes[5];
tg.appendChild(card);
}

blaBla();