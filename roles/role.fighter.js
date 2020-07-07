var roleFighter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var enemies= creep.room.find(FIND_HOSTILE_CREEPS);
        
        if (enemies.length){
            if(creep.attack(enemies[0]) == ERR_NOT_IN_RANGE) {

            creep.moveTo(enemies[0]);
            }
        }
        else{
            creep.moveTo(39,29)
        }
        }
    }

module.exports = roleFighter;