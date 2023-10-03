const randomPick = require('unique-random-array');
const catNames = require('./cat-names.json');

module.exports = {
  all: catNames,
  random: randomPick(catNames),
}
