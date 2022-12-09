//importing mongoose and creating a new tournament schema for tournament details.
import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const forumSchema = new Schema({
    name: String,
    topic: String,
    description: String,

    
}, {
    timestamps: true,
    collection: 'forums'
});

export default mongoose.model('Forum', forumSchema);