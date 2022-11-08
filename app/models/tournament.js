import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const tournamentSchema = new Schema({
    name: String,
    game: String,
    startDate: String,
    endDate: String,
    size: Number
}, {
    timestamps: true,
    collection: 'tournaments'
});

export default mongoose.model('Tournament', tournamentSchema);