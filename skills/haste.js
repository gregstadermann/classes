'use strict';

const { SkillFlag, SkillType } = require('ranvier');

const interval = 2 * 60;
const threshold = 30;
const lagRemoved= 3;

/**
 * Basic warrior passive
 */
module.exports = {
    name: 'Haste',
    type: SkillType.SKILL,
    flags: [SkillFlag.PASSIVE],
    effect: "skill.haste",
    cooldown: interval,

    configureEffect: effect => {
        effect.state = Object.assign(effect.state, {
            threshold: threshold,
            lagRemoved: lagRemoved,
        });

        return effect;
    },

    info: function (player) {
        return `Once every ${interval / 60} minutes, when dropping below ${threshold} energy, restore ${restorePercent}% of your max energy.`;
    }
};
