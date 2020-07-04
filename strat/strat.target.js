var StratTargets = {

    /** @param {spawn} spawn **/
    run: function(creep,type) {
        switch (type){
          //We Try and claim this room
          case claim:
             creep.memory.target = 'W7N3';
            break;

          //we try colonize this room
          case colonize:
             creep.memory.target = 'W7N3';
          break;

          //we try occupy (and exploit) this room
          case occupy:
             creep.memory.target = 'W8N2';
          break;
        }
    }

  }

module.exports = StratTargets;
