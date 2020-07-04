var roleClaimer = {
    // a function to run the logic for this role
    run: function(creep) {

        flags = Game.flags;
        var claims = _.filter(flags, (flag) => flag.color == COLOR_GREEN);
        //var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');

        creep.memory.target = claims[0]
        //console.log('Trying To Claim: ' + );


        // if in target room
        if (creep.room.name != 'W7N3') {

            // find exit to target room
            //var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(claims[0]);
        }
        else {
            // try to claim controller

            creep.moveTo(creep.room.controller);
            creep.claimController(creep.room.controller)
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // move towards the controller
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = roleClaimer;
