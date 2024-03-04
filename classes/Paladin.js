'use strict';

module.exports = {
  name: 'Paladin',
  description: '',

  abilityTable: {
    3: { skills: ['judge'] },
    5: { skills: ['plea'] },
    7: { skills: ['smite'] },
  },

  setupPlayer: (state, player) => {
    // Paladins use Favor, with a max of 10. Favor is a generated resource and returns to 0 when out of combat
    const favor = state.AttributeFactory.create('favor', 10, -10);
    player.addAttribute(favor);
    player.prompt = '[ <b><red>%health.current%</red></b>/<red>%health.max%</red> <b>hp</b> <b><yellow>%favor.current%</yellow></b>/<yellow>%favor.max%</yellow> <b>favor</b> ]';
  }
};
