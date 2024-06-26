'use strict';

module.exports = {
  name: 'Paladin',
  description: '',
  manaStat: 'wisdom',
  primeStats: ['wisdom', 'strength'],
  abilityTable: {
    3: { skills: ['judge'] },
    5: { skills: ['plea'] },
    7: { skills: ['smite'] },
  },
  skills: {
    "brawling": {
      "name": "Brawling",
      "cost": [4,1],
      "ranks": 0
    },
    "one_handed_edged": {
      "name": "Edged Weapons",
      "cost": [3,1],
      "ranks": 0
    },
    "one_handed_blunt": {
      "name": "Blunt Weapons",
      "cost": [3,1],
      "ranks": 0
    },
    "two_handed": {
      "name": "Two-Handed Weapons",
      "cost":[4,2],
      "ranks": 0
    },
    "polearm": {
      "name": "Polearm Weapons",
      "cost":[5,2],
      "ranks": 0
    },
    "ranged": {
      "name": "Ranged Weapons",
      "cost":[6,2],
      "ranks": 0
    },
    "thrown": {
      "name": "Thrown Weapons",
      "cost":[5,1],
      "ranks": 0
    },
    "combat_maneuvers": {
      "name": "Combat Maneuvers",
      "cost":[5,4],
      "ranks": 0
    },
    "shield_use": {
      "name": "Shield Use",
      "cost":[3,0],
      "ranks": 0
    },
    "armor_use": {
      "name": "Armor Use",
      "cost":[3,0],
      "ranks": 0
    },
    "climbing": {
      "name": "Climbing",
      "cost":[3,0],
      "ranks": 0
    },
    "swimming": {
      "name": "Swimming",
      "cost":[2,0],
      "ranks": 0
    },
    "survival": {
      "name": "Survival",
      "cost":[2,2],
      "ranks": 0
    },
    "disarm_traps": {
      "name": "Disarming Traps",
      "cost":[2,5],
      "ranks": 0
    },
    "pick_locks": {
      "name": "Picking Locks",
      "cost":[2,4],
      "ranks": 0
    },
    "stalk_and_hide": {
      "name": "Stalking & Hiding",
      "cost":[4,4],
      "ranks": 0
    },
    "perception": {
      "name": "Perception",
      "cost":[0,3],
      "ranks": 0
    },
    "pickpocketing": {
      "name": "Picking Pockets",
      "cost":[4,4],
      "ranks": 0
    },
    "ambush": {
      "name": "Ambush",
      "cost":[4,5],
      "ranks": 0
    },
    "spell_aim": {
      "name": "Spell Aiming",
      "cost":[4,2],
      "ranks": 0
    },
    "physical_training": {
      "name": "Physical Training",
      "cost":[3,0],
      "ranks": 0
    },
    "harness_power": {
      "name": "Harness Power",
      "cost":[0,5],
      "ranks": 0
    },
    "mana_share": {
      "name": "Mana Sharing",
      "cost":[0,15],
      "ranks": 0
    },
    "magic_item_use": {
      "name": "Magic Item Use",
      "cost":[0,5],
      "ranks": 0
    },
    "scroll_reading": {
      "name": "Scroll Reading",
      "cost":[0,5],
      "ranks": 0
    },
    "minor_spiritual": {
      "name": "Minor Spiritual",
      "cost":[0,17],
      "ranks": 0
    },
    "paladin_base": {
      "name": "Paladin Base",
      "cost":[0,17],
      "ranks": 0
    },
    "first_aid": {
      "name": "First Aid",
      "cost":[1,1],
      "ranks": 0
    }
  },
  setupPlayer: (state, player) => {
    // Paladins use Favor, with a max of 10. Favor is a generated resource and returns to 0 when out of combat
    const favor = state.AttributeFactory.create('favor', 10, -10);
    player.addAttribute(favor);
    player.prompt = '[ <b><red>%health.current%</red></b>/<red>%health.max%</red> <b>hp</b> <b><yellow>%favor.current%</yellow></b>/<yellow>%favor.max%</yellow> <b>favor</b> ]';
  }
};
