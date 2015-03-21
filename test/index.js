var = should      = require('chai').should(),
      expect      = require('chai').expect(),
      nmae        = require('../index'),
      helloString = nmae.helloString,
      sum         = nmae.sum,
      product     = nmae.product,
      //factorial = nmae.factorial,
      arr1 = [0,1,2,3,4,5,6,7,8,9],  // sum: 45, product: 0
      arr2 = [1,2,3,4,5,6,7,8,9,10]; // sum: 55, product: 3628800, 
      
describe('#helloString', function() {
  it('generates a \'Hello {argument}!\' string when argument is used;', function() {
    helloString('John Doe').should.equal('Hello John Doe!');
  });

  it('generates a \'Hello World!\' string when no argument is used;', function() {
    helloString().should.equal('Hello World!');
  });
});

describe('#sum', function() {
  it('calculated the sum of the elements in an array of numbers;', function() {
    sum(arr1).should.equal(45.0);
    sum(arr2).should.equal(55.0);
  });
});

describe('#product', function() {
  it('calculated the product of the elements in an array of numbers;', function() {
    sum(arr1).should.equal(0.0);
    sum(arr2).should.equal(3628800.0);
  });
});

describe('#factorial', function() {
  it('factorial of 0 should equal 1;', function() {
    factorial(0).should.equal(1);
  });
  
  it('factorial of 1 should equal 1;', function() {
    factorial(1).should.equal(1);
  });
  
  it('factorial of 5 should equal 120;', function() {
    factorial(5).should.equal(120);
  });
  
  it('factorial of a negative number should equal give an exception;', function() {
    expect(factorial(1)).to.throw('Ups! It\'s not possible to calculate the factorial of a non-integer or negative number...');
  });
});