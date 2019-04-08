
function Destination(name, location, landmarks, season, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Destination.prototype.fullDestination = function() {
  return this.name + ", " + this.location + ", " + this.landmarks + ", " + this.season + ", " + this.notes;
}

function myPlaceList() {
  this.places = [];
}
myPlaceList.prototype.addPlace = function(thing) {
  this.places.push(thing);
}


var myPlaces;

$(document).ready(function () {
  myPlaces = new myPlaceList();
  myPlaces.addPlace(new Destination("Paris", "France", "Eiffel Tower", "Spring", "Went to a jazz club, Drank wine"));
  myPlaces.addPlace(new Destination("Dublin", "Ireland", "Blarny Stone", "Summer", "Went to a Pub, Drank beer"));
  myPlaces.addPlace(new Destination("Bangkok", "Thailand", "Food market", "Summer", "don't take a moto bike taxi"));


});
