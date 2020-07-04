var utilSetupsWorking = {

    /** @param {spawn} spawn **/
    run: function(creep) {
        if (creep.memory.working == undefined){
          creep.memory.working = false
        }

        return creep;
    }

  }

module.exports = utilSetupsWorking;
