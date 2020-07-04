var StratSpawn = require('strat.spawn');
var StratTargets = require('strat.targets');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleFighter = require('role.fighter');
var roleConquistador = require('role.conquistador');
var roleDHarvester = require('role.distanceharvester');
var roleClaimer = require('role.claimer');
//const fs = require('fs') 

module.exports.loop = function () {
    
  //Book keeping

  //Remove dead creeps
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
   //Update Global Target Variables
   StratTargets.run();
   //console.log('Testing Global Memory:', Memory.occupy);


    var towers = Game.rooms.W8N3.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (let tower of towers) {
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (target != undefined) {
            tower.attack(target);
        }
    }

    for (let spawnName in Game.spawns) {
      let spawn = Game.spawns[spawnName];
      StratSpawn.run(spawn);
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'fighter') {
            roleFighter.run(creep);
        }
        if(creep.memory.role == 'conquistador') {
            roleConquistador.run(creep);
        }
        if(creep.memory.role == 'Dharvester') {
            roleDHarvester.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
    }
}
