import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true
    },
    pets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet'
        }
    ],
   

});

const User = mongoose.model('User', UserSchema);

export default User;