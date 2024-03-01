'use strict';

/**
 * See warrior.js for more on classes.
 */
module.exports = {
  name: 'Wizard',
  description: 'Wizards spend years learning to harness arcane forces to impose their will on the world around them. As scholars, they tend to be less brawny than Warriors and less stout than Clerics. Their powerful spells keep them alive and allow them to wreak havoc... as long as they have the mana to cast them.',
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