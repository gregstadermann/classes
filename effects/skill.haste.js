'use strict';

const { Broadcast, EffectFlag, Heal } = require('ranvier');

/**
 * Implementation effect for haste skill
 */
module.exports = {
  config: {
    name: 'Haste',
    type: 'skill:haste'
  },
  flags: [EffectFlag.BUFF],
  listeners: {
    damaged: function (damage) {
      if (this.skill.onCooldown(this.target)) {
        return;
      }


      Broadcast.sayAt(this.target, "<bold><yellow>You speed up greatly!</bold></yellow>");
      const amount = 3;
        this.target.addEffect(this.skill.effectFactory.create('skill.haste', { duration: 1000 * amount }, { magnitude: 1 }));
        this.target.combatData.lag = target.combatData.lag - 3;
      //const heal = new Heal('energy', amount, this.target, this.skill);
      //heal.commit(this.target);

      this.skill.cooldown(this.target);
    }
  }
};
