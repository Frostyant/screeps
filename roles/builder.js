var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

      // if target is defined and creep is not in target room
      //console.log('Trying To Claim: ' + creep.memory.target);
      //creep.memory.target = 'W7N3';
      if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
          // find exit to target room
          //var exit = creep.room.findExitTo(creep.memory.target);
          // move to exit
          flags = Game.flags;
          var claims = _.filter(flags, (flag) => flag.color == COLOR_GREEN);
          creep.moveTo(claims[0]);
          // return the function to not do anything else
          return;
      }else{

          if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
              creep.memory.building = false;
              creep.say('🔄 harvest');
          }
          if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
              creep.memory.building = true;
              creep.say('🚧 build');
          }

          if(creep.memory.building) {
              var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
              if(targets.length) {
                  if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                  }
              }
          }
          else {
              var sources = creep.room.find(FIND_SOURCES);
              if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
      }
  }
};

module.exports = roleBuilder;
