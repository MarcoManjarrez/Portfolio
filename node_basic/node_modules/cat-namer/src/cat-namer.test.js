const expect = require('chai').expect;
const cat = require('./cat-namer');

describe('cat-namer', () => {
  it('should run', () => {
    expect(true).to.be.true;
  });
});

describe('does all work', () => {
  it('should be an array of strings', () => {
    expect(cat.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(array) {
      return array.every(item  => {
        return typeof item === 'string';
      });
    }
  });
  it('should contain `Zazu`', () => {
    expect(cat.all).to.include('Zazu');
  });
});

describe('does random work', () => {
  it('should return a random name', () => {
    var randomCat = cat.random();
    expect(cat.all).to.include(randomCat);
  });
});
