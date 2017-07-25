console.log("dark side, yo!");

//make the first letter a capitol letter becasue it is an IIFE
//use var because it can be instantiated more than once.
var Starwars = (function(){
	let location = "The Unknow Regions";
	let keyPlayers = ["Jabba The Hutt", "Count Dooku", "Darth Maul", "General Grievous", "Greedo", "Jango Fett", "Darth Sidious"]

	return {
		getEvil: function(){
			console.log("Evil list of Players:", keyPlayers);
			return keyPlayers;
		},
		getDarkLocation: function(){
			return location;
		},

		addEvil: function(who){
			keyPlayers.push(who);
			console.log("evil player", keyPlayers);
		}
	}

})();
//those () at the end will invoke the code immediatley. 