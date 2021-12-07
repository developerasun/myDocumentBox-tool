const mocha = require('mocha');
const assert = require('assert');

describe('some demo test', function(){
    // it method for one single test
    it("add two numbers", function(){
        assert.equal(2+3===5); 
    });
});