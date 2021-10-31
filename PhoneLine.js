class PhoneLine {

  
  constructor(count = 0) {
    this.count = count
    this.price_per_phoneline = 150
    this.total = (this.price_per_phoneline * this.count)

  }

  increment() {
    if(this.count >= 8) {
      throw Error("You have exceeded the max phonelines")
    }
    this.count++
    this.total = (this.price_per_phoneline * this.count);
    return this.total;
  }

  decrement() {
    this.count--
  }  

  multiply(a, count) {
        
       return this.total
    console.log(total)
  }

}



module.exports = PhoneLine