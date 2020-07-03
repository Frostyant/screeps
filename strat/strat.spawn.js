var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleFighter = require('role.fighter');
var stratClaim = require('strat.claim');

var StratSpawn = {

    /** @param {spawn} spawn **/
    run: function(spawn) {

      let creepsInRoom = spawn.room.find(FIND_CREEPS);
      let structuresInRoom = spawn.room.find(FIND_STRUCTURES);

      //creeps
      var mycreeps = _.filter(creepsInRoom,(creep) => creep.my)
      var harvesters = _.filter(mycreeps, (creep) => creep.memory.role == 'harvester');
      var upgraders = _.filter(mycreeps, (creep) => creep.memory.role == 'upgrader');
      var builders = _.filter(mycreeps, (creep) => creep.memory.role == 'builder');
      var repairers = _.filter(mycreeps, (creep) => creep.memory.role == 'repairer');
      var fighters = _.filter(mycreeps, (creep) => creep.memory.role == 'fighter');
      var claimers = _.filter(mycreeps, (creep) => creep.memory.role == 'claimer');
      var conquistadors = _.filter(mycreeps, (creep) => creep.memory.role == 'conquistador');
      var dharvesters = _.filter(mycreeps, (creep) => creep.memory.role == 'Dharvester');

      //strucutres
      var myStructures = _.filter(structuresInRoom,(structure) => structure.my);
      var extensions = _.filter(structuresInRoom,(structure) => structure.structureType == 'extension');

      var energy = spawn.room.energyCapacityAvailable;

      if(repairers.length < 2) {
          var newName = 'Repairer' + Game.time;
          //console.log('Spawning new repairer: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'repairer'}});
      }


      //console.log('myStructures', extensions.length )
      if(extensions.length < 10){

      if(harvesters.length < 3) {
          var newName = 'Harvester' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'harvester'}});
      }

      if(upgraders.length < 3) {
          var newName = 'Upgrader' + Game.time;
          //console.log('Spawning new upgrader: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'upgrader'}});
      }

      if(builders.length < 2) {
          var newName = 'Builder' + Game.time;
          //console.log('Spawning new builder: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'builder'}});
      }

      if(upgraders.length < 5) {
          var newName = 'Fast-Upgrader' + Game.time;
          //console.log('Spawning new upgrader: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
              {memory: {role: 'upgrader'}});
      }
    }else{

      //stratClaim.run(spawn)

      if(harvesters.length < 3) {
          var newName = 'Pickaxe Harvester' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'harvester'}});
      }

      if(harvesters.length < 3) {
          var newName = 'Shovel Harvester' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([WORK,WORK,WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'harvester'}});
      }

      if(harvesters.length < 2) {
          var newName = 'Harvester' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName,
              {memory: {role: 'harvester'}});
      }

      if(upgraders.length < 5) {
          var newName = 'Faster Upgrader' + Game.time;
          //console.log('Spawning new upgrader: ' + newName);
          spawn.spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName,
              {memory: {role: 'upgrader'}});
      }

      if(builders.length < 2) {
          var newName = 'Faster Builder' + Game.time;
          //console.log('Spawning new builder: ' + newName);
          spawn.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
              {memory: {role: 'builder'}});
      }

      if(conquistadors.length < 5) {
          var newName = 'screep-at-arms conq' + Game.time;
          //console.log('Spawning new harvester: ' + newName);
          spawn.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
              {memory: {role: 'conquistador'}});
      }
    }

      if(fighters.length < 5) {
          var newName = 'militia' + Game.time;
          //console.log('Spawning new fighter: ' + newName);
          spawn.spawnCreep([ATTACK,ATTACK,MOVE,MOVE], newName,
              {memory: {role: 'fighter'}});
      }

      if(fighters.length < 4) {
          var newName = 'screep-at-arms' + Game.time;
          //console.log('Spawning new fighter: ' + newName);
          spawn.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE], newName,
              {memory: {role: 'fighter'}});
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
