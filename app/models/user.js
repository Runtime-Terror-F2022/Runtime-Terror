//importing mongoose and creating a new user schema
import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose; 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    profileType: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    username: String,
    displayName: String

}, {
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);


export default mongoose.model('User', UserSchema);