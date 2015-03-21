// TODO: Create recursive factorial function demonstrating JavaScript Object Orientated programming.
// Constructor:
function fact(number){
  this.number = number
}
fact.prototype.calculate = function(){
  if number == 0:
    return 1;
  else:
    return (number*fact(number-1).calculate())
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
  }
  
  /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} sum
   */
  sum: function(arr){
    sum = 0.0

    if(len(arr) >= 1) {
      for i in arr:
        sum += i
    }
    return sum
  }
 
  /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} prod
   */
  product: function(arr){
    prod = 0.0

    if(len(arr) >= 1) {
      for i in arr:
        sum += i
    }
    return prod
  }
  
  /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} prod
   */
  product: function(arr){
    prod = 0.0

    if(len(arr) >= 1) {
      for i in arr:
        sum += i
    }
    return prod
  }
  
    /**
   * Simple example sum function for element in array.
   *
   * @param  {array} arr
   * @return {double} prod
   */
  factorial: function(num){
    result = 0
    
    if (data === parseInt(data, 10) && not(num < 0)){
      temp = fact(num)
      result = fact.calculate()
      return result
    }
    throw('Ups! It\'s not possible to calculate the factorial of a non-integer or negative number...')
    
    
  }
  
 }