'use strict';

module.exports = [
  {
    name: 'mana',
    base: 100,
    formula: {
      requires: ['intelligence'],
      fn: function (character, mana, intelligence) {
        return mana + (intelligence * 10);
      }
    },
  },
  { name: 'favor', base: 10 },
];
