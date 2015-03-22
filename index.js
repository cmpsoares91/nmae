// Constructor:
function fact(number){
  this.number = number
}
// Method:
fact.prototype.calculate = function(){
  if (this.number == 0)
    return 1;
  else
    
    return (this.number*(new fact(this.number-1)).calculate())
}

module.exports = {
  /**
   * Simple example 'Hello World' string generation.
   *
   * @param  {String} nome
   * @return {String}
   */
  helloString: function(nome){
    if (nome == null) {return 'Hello World!'}
    return 'Hello ' + nome + '!'
  },
  
  /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} result
   */
  sum: function(arr){
    var result = 0.0

    if(arr.length >= 1) {
      for(var i = 0; i < arr.length; i++){
        result += arr[i]
      }
    }
    return result
  },
 
  /**
   * Simple example product function for element in array.
   *
   * @param  {array} arr
   * @return {double} prod
   */
  product: function(arr){
    prod = 1.0

    if(arr.length >= 1) {
      for(var i = 0; i < arr.length; i++){
        prod *= arr[i]
      }
    }
    return prod
  },

  /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} prod
   */
  factorial: function(num){
    var result = 0
    
    if (num === parseInt(num, 10) && !(num < 0)){
      var fact1 = new fact(num)
      result = fact1.calculate()
      return result
    }
    throw new Error('Ups! It\'s not possible to calculate the factorial of a non-integer or negative number...');
    
  }
  
 }