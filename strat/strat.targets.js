var StratTargets = {

    /** @param {spawn} spawn **/
    run: function() {
          //We Try and claim this room
          Memory.claim = undefined;
          Memory.colonize = undefined;
          Memory.occupy = ['W8N4','W7N4','W6N3','W8N2'];
          Memory.occupyNumber = [4,4,4,4];
        }
    }

module.exports = StratTargets;
