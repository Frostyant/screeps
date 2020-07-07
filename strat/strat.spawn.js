var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleFighter = require('role.fighter');
var stratClaim = require('strat.claim');
var stratTargets = require('strat.targets');
var utilLocalEconCreep = require('util.localeconcreep');

var lastTickCreeps = 0;

var StratSpawn = {

    /** @param {spawn} spawn **/
    run: function(spawn) {


        //Only applying 1/10 ticks for performance
        if(Game.time % 10 != 0 && Game.creeps.length >= lastTickCreeps) {
            lastTickCreeps = Game.creeps.length;
            return;
        }

      //Sets up the SpawningRole memory variable
      if(spawn.memory.SpawningRole == undefined){
        spawn.memory.SpawningRole = 1;
      }


      //Counting creeps & structures
      let creepsInRoom = spawn.room.find(FIND_CREEPS);
      let structuresInRoom = spawn.room.find(FIND_STRUCTURES);

      //creeps by jobs
      var mycreeps = _.filter(creepsInRoom,(creep) => creep.my)
      var harvesters = _.filter(mycreeps, (creep) => creep.memory.role == 'harvester');
      var upgraders = _.filter(mycreeps, (creep) => creep.memory.role == 'upgrader');
      var builders = _.filter(mycreeps, (creep) => creep.memory.role == 'builder');
      var allBuilders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
      var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
      var colonisers = _.filter(allBuilders, (creep) => creep.memory.targets != undefined);
      var repairers = _.filter(mycreeps, (creep) => creep.memory.role == 'repairer');
      var fighters = _.filter(mycreeps, (creep) => creep.memory.role == 'fighter');
      var claimers = _.filter(mycreeps, (creep) => creep.memory.role == 'claimer');
      var conquistadors = _.filter(Game.creeps, (creep) => creep.memory.role == 'conquistador');
      var dharvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Dharvester');

      //Counts the number of local economy creeps
      var localEconCreeps = [harvesters.length,upgraders.length,builders.length,repairers.length];

      //strucutres
      //var myStructures = _.filter(structuresInRoom,(structure) => structure.my);
      //var extensions = _.filter(structuresInRoom,(structure) => structure.structureType == 'extension');

      var energy = spawn.room.energyAvailable;
      var energyCap = spawn.room.energyCapacityAvailable;



      //IF at max energy, spawn creeps
      if (energy == energyCap){
        //IF current spawning role requires more spawns
        if(localEconCreeps[spawn.memory.SpawningRole] < Memory.localRoleCounts[spawn.memory.SpawningRole]){
          //Spawn creep of required role
          utilLocalEconCreep.run(spawn,spawn.memory.SpawningRole);
          //Move to next role at next available spawn

        }else{
          //IF too many of anyone role, try and build a long-distance miner
          if(dharvesters.length < 2) {
                var newName = 'Fast Harvester' + Game.time;
                //console.log('Spawning new harvester: ' + newName);
                spawn.spawnCreep([WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
                    {memory: {role: 'Dharvester'}});
                //Move to next role at next available spawn
                //spawn.memory.SpawningRole = ((spawn.memory.SpawningRole+1) % 4);
            }
        }
        spawn.memory.SpawningRole = ((spawn.memory.SpawningRole+1) % 4);


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
