'use strict';

/**
 * This example definition of a class file is a guideline. The class system is
 * left intentionally vague so as to not be too opinionated. Class files are
 * assumed to be js files instead of blank yaml files just to future proof the
 * bundle-loading of class files in case someone wants extra functionality in
 * their classes.
 */
module.exports = {
    name: 'Bard',
    description: '',
    manaStat: 'aura',
    primeStats: ['charisma', 'aura'],
    abilityTable: {
        3: { skills: ['rend'] },
        5: { skills: ['lunge'] },
        7: { skills: ['shieldblock'] },
        10: { skills: ['secondwind'] },
    },
    skills: {
        "brawling": {
            "name": "Brawling",
            "cost": [10,2],
            "ranks": 0
        },
        "one_handed_edged": {
            "name": "Edged Weapons",
            "cost": [6,1],
            "ranks": 0
        },
        "one_handed_blunt": {
            "name": "Blunt Weapons",
            "cost": [6,1],
            "ranks": 0
        },
        "two_handed": {
            "name": "Two-Handed Weapons",
            "cost":[14,3],
            "ranks": 0
        },
        "polearm": {
            "name": "Polearm Weapons",
            "cost":[14,3],
            "ranks": 0
        },
        "ranged": {
            "name": "Ranged Weapons",
            "cost":[14,3],
            "ranks": 0
        },
        "thrown": {
            "name": "Thrown Weapons",
            "cost":[8,2],
            "ranks": 0
        },
        "combat_maneuvers": {
            "name": "Combat Maneuvers",
            "cost":[12,8],
            "ranks": 0
        },
        "shield_use": {
            "name": "Shield Use",
            "cost":[13,0],
            "ranks": 0
        },
        "armor_use": {
            "name": "Armor Use",
            "cost":[14,0],
            "ranks": 0
        },
        "climbing": {
            "name": "Climbing",
            "cost":[4,0],
            "ranks": 0
        },
        "swimming": {
            "name": "Swimming",
            "cost":[3,0],
            "ranks": 0
        },
        "survival": {
            "name": "Survival",
            "cost":[3,2],
            "ranks": 0
        },
        "disarm_traps": {
            "name": "Disarming Traps",
            "cost":[2,6],
            "ranks": 0
        },
        "pick_locks": {
            "name": "Picking Locks",
            "cost":[2,4],
            "ranks": 0
        },
        "stalk_and_hide": {
            "name": "Stalking & Hiding",
            "cost":[5,4],
            "ranks": 0
        },
        "perception": {
            "name": "Perception",
            "cost":[0,3],
            "ranks": 0
        },
        "pickpocketing": {
            "name": "Picking Pockets",
            "cost":[3,3],
            "ranks": 0
        },
        "ambush": {
            "name": "Ambush",
            "cost":[15,10],
            "ranks": 0
        },
        "spell_aim": {
            "name": "Spell Aiming",
            "cost":[2,1],
            "ranks": 0
        },
        "physical_training": {
            "name": "Physical Training",
            "cost":[8,0],
            "ranks": 0
        },
        "harness_power": {
            "name": "Harness Power",
            "cost":[0,4],
            "ranks": 0
        },
        "mana_share": {
            "name": "Mana Sharing",
            "cost":[0,3],
            "ranks": 0
        },
        "magic_item_use": {
            "name": "Magic Item Use",
            "cost":[0,1],
            "ranks": 0
        },
        "scroll_reading": {
            "name": "Scroll Reading",
            "cost":[0,2],
            "ranks": 0
        },
        "major_elemental": {
            "name": "Major Elemental",
            "cost":[0,8],
            "ranks": 0
        },
        "minor_elemental": {
            "name": "Minor Elemental",
            "cost":[0,8],
            "ranks": 0
        },
        "wizard_base": {
            "name": "Wizard Base",
            "cost":[0,8],
            "ranks": 0
        },
        "first_aid": {
            "name": "First Aid",
            "cost":[2,1],
            "ranks": 0
        }
    },
    setupPlayer: (state, player) => {
        const energy = state.AttributeFactory.create('energy', 100);
        player.addAttribute(energy);
        player.prompt = '[ %health.current%/%health.max% <b>hp</b> %energy.current%/%energy.max% <b>energy</b> ]';
    }
};
