'use strict';

module.exports = {
  name: 'Paladin',
  description: '',

  abilityTable: {
    3: { skills: ['judge'] },
    5: { skills: ['plea'] },
    7: { skills: ['smite'] },
  },
  skills: {
    "brawling": {
      "name": "Brawling",
      "cost": [10, 2]
    },
    "one_handed_edged": {
      "name": "Edged Weapons",
      "cost": [6, 1]
    },
    "one_handed_blunt": {
      "name": "Blunt Weapons",
      "cost": [6, 1]
    },
    "two_handed": {
      "name": "Two-Handed Weapons",
      "cost": [14, 3]
    },
    "polearm": {
      "name": "Polearm Weapons",
      "cost": [14, 3]
    },
    "ranged": {
      "name": "Ranged Weapons",
      "cost": [14, 3]
    },
    "thrown": {
      "name": "Thrown Weapons",
      "cost": [8, 2]
    },
    "combat_maneuvers": {
      "name": "Combat Maneuvers",
      "cost": [12, 8]
    },
    "shield_use": {
      "name": "Shield Use",
      "cost": [13, 0]
    },
    "armor_use": {
      "name": "Armor Use",
      "cost": [14, 0]
    },
    "climbing": {
      "name": "Climbing",
      "cost": [4, 0]
    },
    "swimming": {
      "name": "Swimming",
      "cost": [3, 0]
    },
    "survival": {
      "name": "Survival",
      "cost": [3, 2]
    },
    "disarm_traps": {
      "name": "Disarming Traps",
      "cost": [2, 6]
    },
    "pick_locks": {
      "name": "Picking Locks",
      "cost": [2, 4]
    },
    "stalk_and_hide": {
      "name": "Stalking & Hiding",
      "cost": [5, 4]
    },
    "perception": {
      "name": "Perception",
      "cost": [0, 3]
    },
    "pickpocketing": {
      "name": "Picking Pockets",
      "cost": [3, 3]
    },
    "ambush": {
      "name": "Ambush",
      "cost": [15, 10]
    },
    "spell_aim": {
      "name": "Spell Aiming",
      "cost": [2, 1]
    },
    "physical_training": {
      "name": "Physical Training",
      "cost": [8, 0]
    },
    "harness_power": {
      "name": "Harness Power",
      "cost": [0, 4]
    },
    "mana_share": {
      "name": "Mana Sharing",
      "cost": [0, 3]
    },
    "magic_item_use": {
      "name": "Magic Item Use",
      "cost": [0, 1]
    },
    "scroll_reading": {
      "name": "Scroll Reading",
      "cost": [0, 2]
    },
    "major_elemental": {
      "name": "Major Elemental",
      "cost": [0, 8]
    },
    "minor_elemental": {
      "name": "Minor Elemental",
      "cost": [0, 8]
    },
    "wizard_base": {
      "name": "Wizard Base",
      "cost": [0, 8]
    },
    "first_aid": {
      "name": "First Aid",
      "cost": [2, 1]
    }
  },

  setupPlayer: (state, player) => {
    // Paladins use Favor, with a max of 10. Favor is a generated resource and returns to 0 when out of combat
    const favor = state.AttributeFactory.create('favor', 10, -10);
    player.addAttribute(favor);
    player.prompt = '[ <b><red>%health.current%</red></b>/<red>%health.max%</red> <b>hp</b> <b><yellow>%favor.current%</yellow></b>/<yellow>%favor.max%</yellow> <b>favor</b> ]';
  }
};
