var question_1 = document.getElementsByTagName("p");
console.log("");
console.log("question 1");

console.log(`il y a ${question_1.length} paragraphes dans le document`);

console.log("");
console.log("question 2");

var question_2 = document.getElementById("coucou").textContent;
console.log(`le contenu de l'id "coucou" est "${question_2}"`);

console.log("");
console.log("question 3");

var question_3 = document.querySelectorAll('a');
console.log(question_3[2].getAttribute("href"));

console.log("");
console.log("question 4");

var question_4 = console.log(document.getElementsByClassName("compte-moi").length);


console.log("");
console.log("question 5");

var question_5 = console.log(`le nombre de li qui a pour classname "compte-moi" est de ${document.querySelectorAll("li.compte-moi").length}`);

console.log("");
console.log("question 6");

var question_6 = document.querySelectorAll("ol > li.compte-moi").length;
console.log(question_6);

console.log("");
console.log("question 7");

var question_7 =  document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].innerHTML;
console.log(question_7);