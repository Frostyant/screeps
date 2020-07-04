var utilMultisource = {

    /** @param {spawn} spawn **/
    run: function(creep) {

        if(creep.memory.sourcen == undefined){
          var sources =  creep.room.find(FIND_SOURCES);
          for(  n = 0; n < sources.length; n++){

            //Get current number assigned to target
            let creepsInRoom = creep.room.find(FIND_CREEPS);
            var mycreeps = _.filter(creepsInRoom,(creep) => creep.my)
            var current = _.filter(mycreeps, (creep) => creep.memory.sourcen == n);

            // if current < required, add myself
            if( current.length < 2){
              creep.memory.sourcen = n;
            }
          }

        }

        return creep;
    }

  }

module.exports = utilMultisource;
