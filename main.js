console.log("main.js, Yo!");

let resistanceLocation = "D'Qar";

let getLocation = document.getElementById("checkLocation");
getLocation.addEventListener("click", () => {
	console.log("Hey, Darth! We are located at:", resistanceLocation);
});

let objButton = document.getElementById("checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log("Starwars IIFE", Starwars);
};

let darkButton = document.getElementById("getDarkPlayers");
darkButton.addEventListener("click", getDarkPlayers);

function getDarkPlayers(event){
	Starwars.getEvil();
};

let locationBtn = document.getElementById("btn-getLocationD");
locationBtn.addEventListener("click", () => {
	Starwars.getLocation(locationBtn.getAttribute("whoIsIt"));
})


let locationBtnL = document.getElementById("btn-getLocationL");
locationBtnL.addEventListener("click", () => {
	Starwars.getLocation(locationBtnL.getAttribute("whoIsIt"));
});


let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", ()=>{
	let newPlayerName = document.getElementById("newperson").value;
	let whichselected;
	var radios = document.getElementsByName("whichside");
	for (let i = 0; i < radios.length; i++){
		//1 = Good, 2 = Evil, 0 = Jedi
		if (radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}

	console.log("whichselected", whichselected);

	if(whichselected == 0){
		Starwars.addJedi(newPlayerName);
	}else if(whichselected == 1){
		Starwars.addKeyPlayers(newPlayerName);
	}else{
		Starwars.addEvil(newPlayerName);
	}



})



















































