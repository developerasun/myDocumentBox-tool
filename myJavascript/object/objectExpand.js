// visualize what you are going to create before you create it.
// e.g : how it will be used, in what context it functions well

// Declare the prototype of the Object
// this in method points to the object where the method belongs to
// use 'this' keyword based on the object's logic(where the method belongs to)
Object.prototype.findTreasure = function(where) {
    for (const cityName in this) {
        if (this[cityName] === where) {
            console.log("treasure is at : ", this[cityName]); 
            return
        }
    }
    console.log(`your treasure is at : ${where}, treasure gone`); 
    return
}

// object city and treasure inherits the property findTreasure since 
// Object is the parent of all the objects.
const city = ['seoul','tokyo', 'london', 'berlin'];
const thanosJam = {name:'Thanos', location:'seoul'}; 


city.findTreasure('seoul'); 
thanosJam.findTreasure(city[2]); 
