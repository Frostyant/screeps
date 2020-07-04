var utilSetupTargets = require('util.setuptargets');
var utilSetupsWorking = require('util.setupworking');
var utilMultisource = require('util.multisource');

var roleDHarvester = {

  // a function to run the logic for this role
  run: function(creep) {
      creep = utilSetupsWorking.run(creep);
      //var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
      //creep.memory.target = occupy[0]
      //creep.memory.base = bases[0]

      //creep.memory.working = false;
      //creep.memory.target = undefined;
      creep = utilSetupTargets.run(creep,Memory.occupy,Memory.occupyNumber);

      creep = utilMultisource.run(creep);

      //rooms = Game.rooms;
      //room = _.filter(rooms, (room) => room.name == 'W7N4');
      //const pos = new RoomPosition(25, 25, 'W7N4');
      //creep.moveTo(pos)

      // if creep is bringing energy to a structure but has no energy left
      if (creep.memory.working == true && creep.carry.energy == 0) {
          // switch state
          creep.memory.working = false;
      }
      // if creep is harvesting energy but is full
      else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
          // switch state
          creep.memory.working = true;
      }

      // if creep is supposed to transfer energy to a structure
      if (creep.memory.working == true) {
          // if in home room
          if (creep.room.name == creep.memory.base) {
              // find closest spawn, extension or tower which is not full
              var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                  // the second argument for findClosestByPath is an object which takes
                  // a property called filter which can be a function
                  // we use the arrow operator to define it
                  filter: (s) => (s.structureType == STRUCTURE_SPAWN
                               || s.structureType == STRUCTURE_EXTENSION
                               || s.structureType == STRUCTURE_TOWER)
                               && s.energy < s.energyCapacity
              });

              // if we found one
              if (structure != undefined) {
                  // try to transfer energy, if it is not in range
                  if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                      // move towards it
                      creep.moveTo(structure);
                  }
              }
          }
          // if not in home room...
          else {
              // find exit to home room
              //var exit = creep.room.findExitTo(home);
              // and move to exit

              const pos = new RoomPosition(25, 25, creep.memory.base);
              creep.moveTo(pos)

              //creep.moveTo(creep.memory.base);
          }
      }
      // if creep is supposed to harvest energy from source
      else {
        if(creep.room.name == creep.memory.target){
          var sources =  creep.room.find(FIND_SOURCES);
          source = sources[creep.memory.sourcen]
          console.log('TEST2 ' +  source);
          // try to harvest energy, if the source is not in range
          if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
              // move towards the source
              creep.moveTo(source);

          }
      }else {
        const pos = new RoomPosition(25, 25, creep.memory.target);
        creep.moveTo(pos)
      }
      }


  }
};

module.exports = roleDHarvester;
