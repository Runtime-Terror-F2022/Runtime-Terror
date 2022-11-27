//importing mongoose and creating a new user schema for users details.
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose; 
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    profileType: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    username: String,
    password: String,
    confirmPassword : String
}, {
    timestamps: true,
    collection: 'profiles'
});

ProfileSchema.plugin(passportLocalMongoose);

export default mongoose.model('Profile', ProfileSchema);