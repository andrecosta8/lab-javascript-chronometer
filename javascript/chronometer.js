class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
    this.currentTime++; 
    callback;
  },1000)
 
}
  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0){
      return 0;
    }
    else{
    let minutes = Math.floor((this.currentTime)/60);
    return minutes;
  }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0){
      return 0;
    }
    else{
    let seconds = Math.floor((this.currentTime) % 60);
    return seconds;
  }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber = '';
    if (value <= 9){
      twoDigitNumber = "0" + value.toString();
    }else{
      twoDigitNumber = value.toString();
    }
    return twoDigitNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
      let splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
      let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
      return `${splitMinutes}:${splitSeconds}`;
    // ... your code goes here

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
