//importing mongoose and creating a new tournament schema for tournament details.
import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const tournamentSchema = new Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    teams: String
}, {
    timestamps: true,
    collection: 'tournaments'
});

export default mongoose.model('Tournament', tournamentSchema);