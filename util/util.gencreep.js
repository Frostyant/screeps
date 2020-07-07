var utilGenCreep = {
          run:function(energy, template, templateCost) {

                      //Init body
                      var body = [];

                      //Get max number of templates we could fit in 1 body
                      var numberOfTemplates = Math.floor(energy / templateCost);

                      var body = [];
                      for(j = 0; j < template.length;j++){
                        for (let i = 0; i < numberOfTemplates; i++) {
                            body.push(template[j]);
                        }
                      }
                      /*
                      for (let i = 0; i < numberOfTemplates; i++) {
                          body.push(WORK);
                      }
                      for (let i = 0; i < numberOfTemplates; i++) {
                          body.push(CARRY);
                      }
                      for (let i = 0; i < numberOfTemplates; i++) {
                          body.push(MOVE);
                      }
                      */

                      // Return body
                      return body;
                  }

}


module.exports = utilGenCreep;
