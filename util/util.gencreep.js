var utilGenCreep = {
          run:function(energy, template, templateCost) {

                      //Init body
                      var body = [];

                      //Get max number of templates we could fit in 1 body
                      var numberOfTemplates = Math.floor(energy / templateCost);

                      //Setup body
                      for (let i = 0; i < numberOfParts; i++) {
                          body.push(template);
                      }

                      // Return body
                      return body;
                  };

}


module.exports = utilGenCreep;
