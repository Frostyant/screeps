var stratTemplates = {

    /** @param {spawn} spawn **/
    run: function() {
          //We Try and claim this room
          Memory.roleTemplateStandard = [WORK,CARRY,MOVE];
          Memory.roleTemplateStandardCost = 200;
          Memory.roleTemplateLongDistance = [WORK,CARRY,MOVE,MOVE,MOVE];
          Memory.roleTemplateLongDistanceCost = 300;
          Memory.roleTemplateMilitia = [ATTACK,MOVE,MOVE];
          Memory.roleTemplateMilitiaCost = 180;
          Memory.roleTemplateMiner = [WORK,WORK,CARRY,MOVE];
          Memory.roleTemplateMinerCost = 300;
        }
    }

module.exports = stratTemplates;
