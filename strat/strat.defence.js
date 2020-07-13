var stratDefence = {

    /** @param {spawn} spawn **/
    run: function(object) {

          //HARDCODE AREA
          //Defence Templates
          //militia == unupgraded unit, fighter fully upgraded
          Memory.DefenceGroupLv1 = ['militia','militia','militia']
          Memory.DefenceGroupLv2 = ['fighter','fighter','fighter']

          //Threat per offensive body part of enemy screeps
          Memory.threatPerBody = 1;
          //Threat per enemy screep
          Memory.threatPerScreep = 0.5;
          //Alert each itme we pass this level of body parts
          Memory.alertThreshold = 10;
          //HARDCODE ARE STOPS

          let creepsInRoom = object.room.find(FIND_CREEPS);
          var threats = _.filter(creepsInRoom,(creep) => creep.my != true);

          if((Memory.threat == NaN )|| (Memory.threat ==undefined)){
            Memory.threat =0;
          }

          if(threats.length>0){
              for (var threat of threats){

                nAttack = threat.body.filter(c => c.type === 'attack').length;
                nRAttack = threat.body.filter(c => c.type  === 'ranged_attack').length;
                nHEAL = threat.body.filter(c => c.type  === 'heal').length;
                nTOUGH = threat.body.filter(c => c.type  === 'tough').length;
                //Avoiding exceptions

                if(nAttack == NaN){
                  nAttack = 0;
                }
                if(nRAttack == NaN){
                  nRAttack = 0;
                }
                if(nHEAL == NaN){
                  nHEAL = 0;
                }
                if(nTOUGH == NaN){
                  nTOUGH = 0;
                }

                threatscore =  (nAttack+nRAttack+nHEAL)* Memory.threatPerBody + nTOUGH*0.1*Memory.threatPerBody;
                Memory.threat = Memory.threat + Memory.threatPerScreep  + threatscore;
                console.log('The level of Threat:'+  Memory.threat);
              }
          }

          //Set current Alert level
          Memory.Alert = Memory.threat/Memory.alertThreshold;

          //No negative values
          if (Memory.threat < 0){
            Memory.threat = 0;
          }
        }
    }

module.exports = stratDefence;
