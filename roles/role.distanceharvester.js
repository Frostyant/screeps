var roleDHarvester = {

  // a function to run the logic for this role
  run: function(creep) {

      spawns = Game.spawns;
      var home =spawns[0];

      flags = Game.flags;
      var occupy = _.filter(flags, (flag) => flag.color == COLOR_ORANGE);

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
          if (creep.room.name == home) {
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
              creep.moveTo(home);
          }
      }
      // if creep is supposed to harvest energy from source
      else {
          // if in target room
          if (creep.room.name == occupy.room.name) {
              // find source
              var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];

              // try to harvest energy, if the source is not in range
              if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                  // move towards the source
                  creep.moveTo(source);
              }
          }
          // if not in target room
          else {
              // find exit to target room
              //var exit = creep.room.findExitTo(creep.memory.target);
              // move to exit
              creep.moveTo(occupy);
          }
      }
  }
};

module.exports = roleDHarvester;
