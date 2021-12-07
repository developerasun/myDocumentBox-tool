// Declare mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Createa a schema
const MarioSchema = new Schema({
    name : String, 
    weight: Number
});

// Create a model based on the schema
// mongoose.model(model name, model schema)
const Mario = mongoose.model("Mario", MarioSchema);

// Export the model 
module.exports = Mario;