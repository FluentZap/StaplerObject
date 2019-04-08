function stapler(color, maxStaples){
  this.staplerColor = color;
  this.maxStaples = maxStaples;
  this.currentStaples = maxStaples / 2;
  this.isOwn = true;
  this.users = [];
}

stapler.prototype.staple = function(doubleStaple) {
  // check if double staple
  if (doubleStaple === true) {
    // check if 2 or more staples
    if (this.currentStaples >= 2) {
      // if two or more remove 2 and return remaining staples.
      this.currentStaples -= 2;
      return this.currentStaples;
    } else {
      // if not 2 or more staples return false
      return false;
    }



  } else {
    // check if single staple
    if (this.currentStaples >= 1) {
      // if single staple remove 1,remaining staples
      this.currentStaples -= 1;
      return this.currentStaples;
    } else {
      // if out of staples, return false
      return false;
    }
  }
};

stapler.prototype.fill = function(amount) {
   debugger;
  if (amount === undefined) {
    this.currentStaples = this.maxStaples / 2;
  }
   if (amount >=0) {
    this.currentStaples += amount
  }
  if (this.currentStaples > this.maxStaples) {
    this.currentStaples = this.maxStaples;
  }
  return this.currentStaples
}
// fill stapler to max max staples

var bigStapler = new stapler("blue", 10);
