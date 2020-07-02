var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleFighter = require('role.fighter');

var StratSpawn = {

    /** @param {spawn} spawn **/
    run: function(spawn) {
      let creepsInRoom = spawn.room.find(FIND_CREEPS);

      var harvesters = _.filter(creepsInRoom, (creep) => creep.memory.role == 'harvester');
      var upgraders = _.filter(creepsInRoom, (creep) => creep.memory.role == 'upgrader');
      var builders = _.filter(creepsInRoom, (creep) => creep.memory.role == 'builder');
      var repairers = _.filter(creepsInRoom, (creep) => creep.memory.role == 'repairer');
      var fighters = _.filter(creepsInRoom, (creep) => creep.memory.role == 'fighter');
      var claimers = _.filter(creepsInRoom, (creep) => creep.memory.role == 'claimer');

      var energy = spawn.room.energyCapacityAvailable;

      if(fighters.length < 7) {
          var newName = 'militia' + Game.time;
          //console.log('Spawning new fighter: ' + newName);
          spawn.spawnCreep([ATTACK,ATTACK,MOVE,MOVE], newName,
              {memory: {role: 'fighter'}});
      }

      if(fighters.length < 10) {
          var newName = 'screep-at-arms' + Game.time;
          //console.log('Spawning new fighter: ' + newName);
          spawn.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE], newName,
              {memory: {role: 'fighter'}});
      }

      if(repairers.length < 2) {
          var newName = 'Repairer' + Game.time;
          //console.log('Spawning new repairer: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'repairer'}});
      }

      if(builders.length < 2) {
          var newName = 'Builder' + Game.time;
          //console.log('Spawning new builder: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'builder'}});
      }

      if(upgraders.length < 3) {
          var newName = 'Upgrader' + Game.time;
          //console.log('Spawning new upgrader: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'upgrader'}});
      }

      if(upgraders.length < 5) {
          var newName = 'Fast-Upgrader' + Game.time;
          //console.log('Spawning new upgrader: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
              {memory: {role: 'upgrader'}});
      }

      if(harvesters.length < 3) {
          var newName = 'Harvester' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'harvester'}});
      }

      if(spawn.spawning) {
          var spawningCreep = Game.creeps[spawn.spawning.name];
          spawn.room.visual.text(
              '🛠️' + spawningCreep.memory.role,
              spawn.pos.x + 1,
              spawn.pos.y,
              {align: 'left', opacity: 0.8});
      }

    }
};

module.exports = StratSpawn;
