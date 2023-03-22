'use strict';

const { Broadcast, Damage, SkillType } = require('ranvier');

const damagePercent = 400;
const manaCost = 80;

function getDamage(player) {
    return player.getAttribute('intellect') * (damagePercent / 100);
}

/**
 * Basic mage spell
 */
module.exports = {
    name: 'Lightning',
    type: SkillType.SPELL,
    requiresTarget: true,
    initiatesCombat: true,
    resource: {
        attribute: 'mana',
        cost: manaCost,
    },
    cooldown: 10,

    run: state => function (args, player, target) {
        const damage = new Damage('health', getDamage(player), player, this, {
            type: 'physical',
        });

        Broadcast.sayAt(player, '<bold>With a wave of your hand, you unleash a <red>bolt</red></bold><yellow>b<bold>all</bold></yellow> <bold>at your target!</bold>');
        Broadcast.sayAtExcept(player.room, `<bold>With a wave of their hand, ${player.name} unleashes a <red>bolt</red></bold><yellow>b<bold>all</bold></yellow> <bold>at ${target.name}!</bold>`, [player, target]);
        if (!target.isNpc) {
            Broadcast.sayAt(target, `<bold>With a wave of their hand, ${player.name} unleashes a <red>bolt</red></bold><yellow>b<bold>all</bold></yellow> <bold>at you!</bold>`);
        }
        damage.commit(target);
    },

    info: (player) => {
        return `Hurl a magical lightning bolt at your target dealing ${damagePercent}% of your Intellect as Fire damage.`;
    }
};
