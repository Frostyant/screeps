var utilGenCreep = require('util.gencreep');

var utilLocalEconCreep = {

    /** @param {spawn} spawn **/
    run: function(spawn,roleNumber) {

          //Get which role and name we are spawning
          var role = Memory.localRoles[roleNumber];
          var newName = role + Game.time;

          //get body
          var body = utilGenCreep.run(spawn.room.energyAvailable, Memory.roleTemplateStandard, Memory.roleTemplateStandardCost)

          console.log('Attemptring to spawn' +  [WORK,MOVE,CARRY]);
          console.log('Attemptring to spawn' +  body);

          //log creation
          console.log('Spawning new local economy creep: ' + newName);

          //spawn creep
          spawn.spawnCreep(body, newName,
              {memory: {role: role}});
    }

  }

module.exports = utilLocalEconCreep;
