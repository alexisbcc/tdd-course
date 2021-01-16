var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase (title){
  return title.toUpperCase();
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertical')).to.equal('Vertical');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
