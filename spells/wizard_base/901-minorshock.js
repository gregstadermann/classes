'use strict';

const { Broadcast: Combat, Damage, SkillType } = require('ranvier');
const {Broadcast} = require("../../../../../gemstone3-core");

const manaCost = 1;

/**
 * Minor Shock Spell
 */
module.exports = {
    name: 'Minor Shock',
    type: SkillType.SPELL,
    requiresTarget: true,
    initiatesCombat: true,
    targetSelf: false,
    resource: {
        attribute: 'mana',
        cost: manaCost,
    },
    cooldown: 3,

    run: state => function (args, player, target) {
        const amount = Combat.calculateWeaponDamage(player) * (damagePercent / 100);

        const damage = new Damage('health', amount, player, this, {
            type: 'elemental',
        });

        Broadcast.sayAt(player, `<b><yellow>You hurl a small surge of electricity at ${target.name}!</yellow></b>`);
        Broadcast.sayAtExcept(player.room, `<b><yellow>${player.name} hurls a small surge of electricity at ${target.name}!</yellow></b>`, [target, player]);
        Broadcast.sayAt(target, `<b><yellow>${player.name} hurls a small surge of electricity at you</yellow></b>`);

        damage.commit(target);
    },

    info: (player) => {
        return `Hurls a small bolt of electricity at a target.`;
    }
};
