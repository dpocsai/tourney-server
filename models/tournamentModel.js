import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema({
  title: { type: String, required: true },
  sport: { type: String, required: true },
  type: { type: String, required: true },
  adminId: { type: String, default: "" },
  participants: [
    {
      name: { type: String, required: true },
      rank: { type: Number, default: null },
      stats: {
        gp: { type: Number, default: 0 },
        wins: { type: Number, default: 0 },
        losses: { type: Number, default: 0 },
        ties: { type: Number, default: 0 },
        wp: { type: Number, default: 0 },
        pf: { type: Number, default: 0 },
        pa: { type: Number, default: 0 },
        diff: { type: Number, default: 0 },
      },
    },
  ],
  matches: [
    {
      matchId: Number,
      teamA: {
        prevMatchId: { type: Number, default: null },
        name: { type: String },
        score: { type: Number, default: 0 },
        rank: Number,
      },
      teamB: {
        prevMatchId: { type: Number, default: null },
        name: { type: String },
        score: { type: Number, default: 0 },
        rank: Number,
      },
      completed: { type: Boolean, default: false },
      winner: { type: String, default: null },
      bye: { type: Boolean, default: false },
      thirdPlaceMatch: { type: Boolean, default: false },
    },
  ],
  completed: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now },
  numberOfRounds: { type: Number, default: 1 },
  thirdPlaceMatch: { type: Boolean, default: false },
});

const tournamentModel = mongoose.model("tournamentModel", tournamentSchema);

export default tournamentModel;
