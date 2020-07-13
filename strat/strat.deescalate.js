var stratDeEscalate = {

    /** @param {spawn} spawn **/
    run: function() {
          var fighters = _.filter(Game.creeps, (creep) => creep.memory.role == 'fighter');
          var archers = _.filter(Game.creeps, (creep) => creep.memory.role == 'archer');
          var healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'healer');
          Memory.Military = fighters.length + archers.length + healers.length;


          //HARDCODE AREA
          //Defence Templates
          //Alert each itme we pass this level of body parts
          Memory.alertThreshold = 1;
          //How much we should reduce alert by at each tick
          Memory.deescalation = 1;
          //HARDCODE ARE STOPS

          console.log('The level of Threat:'+  Memory.threat);
          console.log('The level of Alert:'+  Memory.Alert);


          //De-escalte threat level
          Memory.threat = Memory.threat - (1+Memory.Military)*Memory.deescalation;

          //Set current Alert level
          Memory.Alert = Memory.threat/Memory.alertThreshold;

          //No negative values
          if (Memory.threat < 0){
            Memory.threat = 0;
          }
        }
    }

module.exports = stratDeEscalate;
