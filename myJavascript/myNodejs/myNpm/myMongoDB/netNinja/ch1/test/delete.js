const assert = require('assert');
const Mario = require('../model/mario');

describe("deleting records", function() {

    let myMario;
    // Use mocha hook : create and save model before eact test
    beforeEach(function(done){
        // Create a model instance. Each record will be assigned object id
        myMario = new Mario({
            name: "Jake mario", 
            weight: 75
        });

        // Save the instance
        myMario.save()
        .then(()=>{
        assert(myMario.isNew === false);});
        done(); 
    });

    
});