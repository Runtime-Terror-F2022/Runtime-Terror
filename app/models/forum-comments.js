//importing mongoose and creating a new tournament schema for tournament details.
import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const commentsSchema = new Schema({
    forumID: String,
    username: String,
    comment: String
    
}, {
    timestamps: true,
    collection: 'comments'
});

export default mongoose.model('Comments', commentsSchema);