var UtilSetupTargets = {

    /** @param {spawn} spawn **/
    run: function(creep,list,numbers) {
        if (creep.memory.base == undefined){
          creep.memory.base = creep.room.name;
        }

        //console.log('Testing:', creep.memory.target == undefined);
        //console.log('Testing:', creep.memory.target);
        if(creep.memory.target == undefined){
          for(  n = 0; n < list.length; n++){

            //Get current number assigned to target
            var current = _.filter(Game.creeps, (creep) => creep.memory.target == list[n]);

            // if current < required, add myself
            if( current.length < numbers[n]){
              creep.memory.target = list[n];
            }
          }

        }

        return creep;
    }

  }

module.exports = UtilSetupTargets;
