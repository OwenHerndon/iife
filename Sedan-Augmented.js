//call method with new sedan
var Sedan = (function(newSedan){
	var max_occupancy = 6;
	var current_occupancy = 0;


	newSedan.getOccupancy = function(){
		return current_occupancy;
	};

	newSedan.setOccupancy = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancy = occupancy;
		}else{
			throw "Cannot Exceed Max Occupancy of " + max_occupancy;
		}
		current_occupancy = occupancy;
	};

	//how to change the type varaible from IFFE
	newSedan.getType = function(){
		return "minivan";
	}

	return newSedan;
//puts into Sedan or empty object	
})(Sedan || {});