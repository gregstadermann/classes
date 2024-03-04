'use strict';

/**
 * See Warrior.js for more on classes.
 */
module.exports = {
  name: 'Wizard',
  description: '',
  abilityTable: {
    3: { spells: ['haste'] },
    5: { spells: ['fireball'] },
    7: { spells: ['heal'] },
    10: { spells: ['lightning'] },
  },

  setupPlayer: (state, player) => {
    const mana = state.AttributeFactory.create('mana', 100);
    player.addAttribute(mana);
    player.prompt = '[ %health.current%/%health.max% <b>hp</b> %mana.current%/%mana.max% <b>mana</b> ]';
  }
};
