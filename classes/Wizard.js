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
  skills: {
    "brawling": {
      "name": "Brawling",
      "cost": [10,2]
    },
    "one_handed_edged": {
      "name": "Edged Weapons",
      "cost": [6,1]
    },
    "one_handed_blunt": {
      "name": "Blunt Weapons",
      "cost": [6,1]
    },
    "two_handed": {
      "name": "Two-Handed Weapons",
      "cost":[14,3]
    },
    "polearm": {
      "name": "Polearm Weapons",
      "cost":[14,3]
    },
    "ranged": {
      "name": "Ranged Weapons",
      "cost":[14,3]
    },
    "thrown": {
      "name": "Thrown Weapons",
      "cost":[8,2]
    },
    "combat_maneuvers": {
      "name": "Combat Maneuvers",
      "cost":[12,8]
    },
    "shield_use": {
      "name": "Shield Use",
      "cost":[13,0]
    },
    "armor_use": {
      "name": "Armor Use",
      "cost":[14,0]
    },
    "climbing": {
      "name": "Climbing",
      "cost":[4,0]
    },
    "swimming": {
      "name": "Swimming",
      "cost":[3,0]
    },
    "survival": {
      "name": "Survival",
      "cost":[3,2]
    },
    "disarm_traps": {
      "name": "Disarming Traps",
      "cost":[2,6]
    },
    "pick_locks": {
      "name": "Picking Locks",
      "cost":[2,4]
    },
    "stalk_and_hide": {
      "name": "Stalking & Hiding",
      "cost":[5,4]
    },
    "perception": {
      "name": "Perception",
      "cost":[0,3]
    },
    "pickpocketing": {
      "name": "Picking Pockets",
      "cost":[3,3]
    },
    "ambush": {
      "name": "Ambush",
      "cost":[15,10]
    },
    "spell_aim": {
      "name": "Spell Aiming",
      "cost":[2,1]
    },
    "physical_training": {
      "name": "Physical Training",
      "cost":[8,0]
    },
    "harness_power": {
      "name": "Harness Power",
      "cost":[0,4]
    },
    "mana_share": {
      "name": "Mana Sharing",
      "cost":[0,3]
    },
    "magic_item_use": {
      "name": "Magic Item Use",
      "cost":[0,1]
    },
    "scroll_reading": {
      "name": "Scroll Reading",
      "cost":[0,2]
    },
    "major_elemental": {
      "name": "Major Elemental",
      "cost":[0,8]
    },
    "minor_elemental": {
      "name": "Minor Elemental",
      "cost":[0,8]
    },
    "wizard_base": {
      "name": "Wizard Base",
      "cost":[0,8]
    },
    "first_aid": {
      "name": "First Aid",
      "cost":[2,1]
    }
  },


  setupPlayer: (state, player) => {
    const mana = state.AttributeFactory.create('mana', 100);
    player.addAttribute(mana);
    player.prompt = '[ %health.current%/%health.max% <b>hp</b> %mana.current%/%mana.max% <b>mana</b> ]';
  }
};
