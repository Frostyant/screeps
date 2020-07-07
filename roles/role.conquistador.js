var roleConquistador = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var enemies= creep.room.find(FIND_HOSTILE_CREEPS);



        if (enemies.length){
            if(creep.attack(enemies[0]) == ERR_NOT_IN_RANGE) {

            creep.moveTo(enemies[0]);
            }
        }
        else{
          flags = Game.flags;
          var occupy = _.filter(flags, (flag) => flag.color == COLOR_RED);
          //var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');

          creep.memory.target = occupy[0]
          //console.log('Trying To Claim: ' + creep.memory.target.room);

          console.log('Occupying: ' + creep.memory.target.room.name);

          creep.moveTo(occupy[0]);
        }
        }
    }

module.exports = roleConquistador;
