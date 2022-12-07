//importing mongoose and creating a new tournament schema for tournament details.
import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const tournamentSchema = new Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    team1: String,
    team2: String,
    team3: String,
    team4: String,
    team5: String,
    team6: String,
    team7: String,
    team8: String,
    team9: String,
    team10: String,
    team11: String,
    team12: String,
    team13: String,
    team14: String,
    team15: String,
    team16: String
}, {
    timestamps: true,
    collection: 'tournaments'
});

export default mongoose.model('Tournament', tournamentSchema);