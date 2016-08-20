// var Sedan = (function(){
// 	var color = "blue";
// 	var type = "sedan"

// 	return{
// 		manufacture_Date : new Date(),
// 		getColor: function(){
// 			return color;
// 		},
// 		setColor: function(newColor){
// 			color = newColor;
// 		},
// 		getType: function(){
// 			return type;
// 		}
// 	}
// })();

console.log("Sedan IIFE", Sedan);
console.log("Sedan color", Sedan.getColor());
console.log("Sedan type", Sedan.getType());

console.log("sedan set occupancy", Sedan.setOccupancy(4));
console.log("sedan get occupancy", Sedan.getOccupancy());

