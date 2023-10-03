console.log("hello world");

// const fs = require("fs");
// fs.readFile("input.txt", "utf-8", (err,fd)=>{
// 	if(err) {
// 	console.log("Error type " + err); 
//   }else{
// 	console.log("The file says: \n" + fd);
//   }
// })

const cat = require('random-cat-img');
const supervillains = require('supervillains');
const superheroes = require('superheroes');
var cat2 = require('cat-namer');

(async () => {
	console.time('cat');

	var superbad = supervillains.random();
	var supername = superheroes.random();
	var catname = cat2.random();

	const data = await cat();
	console.log("Look at this cute cat, its so cute. Their name is " + catname);
	console.log(data.message); 
	console.log("Oh no! "+ catname + " has been kidnapped by the evil " + superbad + ", Whoever can save him!!?????????");
	console.log("*Distressed cat meows*")
	console.log("Have no fear, " +  supername + " is here!!!");
	console.log("Yes! " + catname + " is saved!!!");
	console.log("*Slightly happier cat sounds*");
	console.log("Blasted! I will destroy you " + supername + "! If my name isnt " + superbad + "!");
	console.log(supername + " instantly trips and eats shit and dies when trying to get to " + superbad);
	console.log(superbad + " is perplexed, but content with the result");
	console.log(catname + " is never seen again.")

})();