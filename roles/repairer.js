var roleBuilder = require('role.builder');

var roleRepairer = {
    // a function to run the logic for this role
    run: function(creep) {

        // if creep is trying to repair something but has no energy left
        creep.memory.working = false;
        if (creep.memory.working == true && creep.store[RESOURCE_ENERGY] == 0) {
            // switch state
            creep.memory.working = false;

        }
        // if creep is harvesting energy but is full
        if (creep.memory.working == false && creep.store[RESOURCE_ENERGY] == 50) {
            // switch state
            creep.memory.working = true;
        }
        console.log('Repairer Status', creep.memory.working)

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            const targets = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
            });

            targets.sort((a,b) => a.hits - b.hits);

            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // find closest source
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            // try to harvest energy, if the source is not in range
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards the source
                creep.moveTo(source);
            }
        }
    }
};

module.exports = roleRepairer;
