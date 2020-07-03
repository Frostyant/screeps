var StratClaim = {

    /** @param {spawn} spawn **/
    run: function(spawn) {
      flags = Game.flags
      var claims = _.filter(flags, (flag) => flag.color == COLOR_GREEN);
      var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');

        if(claims.length>0){
          if(claimers.length < 1) {
            console.log('Trying To Claim: ' + claimers.length);
              var newName = 'Claimer' + Game.time;
              //console.log('Spawning new repairer: ' + newName);
              spawn.spawnCreep([CLAIM,MOVE], newName,
                  {memory: {role: 'claimer'}});
          }
      }

    }

  }

module.exports = StratClaim;
