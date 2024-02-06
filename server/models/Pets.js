import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    breed: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    

});

const Pet = mongoose.model('Pet', PetSchema);

export default Pet;