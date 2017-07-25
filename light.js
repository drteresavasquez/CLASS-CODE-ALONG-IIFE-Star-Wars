console.log("light side, yo!");

var Starwars = (function(originalStarwars){
	let location = "D'Quar";
	let keyPlayers = ["Princess Leia", "Han Solo", "Chewbacca", "Admiral Ackbar", "Jar Jar Binks"];
	let Jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"];
	let jediList = document.getElementById("jedi-list");

	originalStarwars.getLocation = function(whoAsks){
		console.log("whoAsks", whoAsks);
		let tell = true;
		let evilPlayers = Starwars.getEvil();
		evilPlayers.forEach(function(item){
			if (item === whoAsks){
				tell = false;
				}
			});

			if (tell) {
				console.log(whoAsks, "is on the good side. Location:", location);
			}else{
				console.log("You are Evil, cannot tell you!");
			}
	};

	originalStarwars.addJedi = function(who){
		Jedi.push(who);
		console.log("Jedi list", Jedi);
		jediList.innerHTML = Jedi;
	};

	originalStarwars.addKeyPlayers = function(who){
		keyPlayers.push(who);
		console.log("keyPlayers list", keyPlayers);
	};

	originalStarwars.removeJedi = function(who, name){
		let whichIndex;
		Jedi.forEach(function(item, index){
			if (item === who){
				whichIndex = index;
				Jedi.splice(whichIndex, 1);
				console.log("jedi after death", Jedi);

				if(name){
					Starwars.addEvil(name);
				}
			}
		})
	}



	return originalStarwars;

})(Starwars);





