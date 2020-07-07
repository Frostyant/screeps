var stratEcon = {

    /** @param {spawn} spawn **/
    run: function() {
          //We Try and claim this room
          Memory.localRoles = ['harvester','upgrader','builder','repairer'];
          Memory.localRoleCounts = [2,2,1,2];
        }
    }

module.exports = stratEcon;
