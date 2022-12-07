import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const scoreSchema = new Schema({
    tournamentID: String,
    score1: Number,
    score2: Number,
    score3: Number,
    score4: Number,
    score5: Number,
    score6: Number,
    score7: Number,
    score8: Number,
    score9: Number,
    score10: Number,
    score11: Number,
    score12: Number,
    score13: Number,
    score14: Number,
    score15: Number,
    score16: Number,
    score17: Number,
    score18: Number,
    score19: Number,
    score20: Number,
    score21: Number,
    score22: Number,
    score23: Number,
    score24: Number,
    score25: Number,
    score26: Number,
    score27: Number,
    score28: Number,
    score29: Number,
    score30: Number
}, {
    timestamps: true,
    collection: 'scores'
});

export default mongoose.model('Score', scoreSchema);