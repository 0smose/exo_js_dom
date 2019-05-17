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

// function deleteLastCards() {
// 	var card = document.querySelectorAll("div.row")[1];

// 	for(var i = 0; i = 3; i++){
			
// 	}
// }
// deleteLastCards();