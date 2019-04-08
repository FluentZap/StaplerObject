function stapler(color, maxStaples){
  this.staplerColor = color;
  this.maxStaples = maxStaples;
  this.currentStaples = maxStaples / 2;
  this.isOwn = true;
  this.users = [];
}

stapler.prototype.staple = function(doubleStaple) {
  if (doubleStaple === true) {
    if (this.currentStaples >= 2) {
      this.currentStaples -= 2;
      return this.currentStaples;
    } else {
      return false;
    }

  } else {
    this.currentStaples--;
  }
};


var bigStapler = new stapler("blue", 10);
