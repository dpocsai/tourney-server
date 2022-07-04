import mongoose from "mongoose";
import tournamentModel from "../models/tournamentModel.js";

export const getTournament = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send(`Tournament with id: ${_id} does not exist.`);
    }
    const tournament = await tournamentModel.findById(_id);
    res.status(200).json(tournament);
  } catch (error) {
    console.log(error);
  }
};

export const getTournaments = async (req, res) => {
  try {
    const tournaments = await tournamentModel.find();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTournament = async (req, res) => {
  try {
    const newTournament = new tournamentModel(req.body);
    let createdTournament = await newTournament.save();
    res.status(201).json(createdTournament);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTournament = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const tournament = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send(`Tournament with id: ${_id} does not exist.`);
    }
    const updatedTournament = await tournamentModel.findByIdAndUpdate(
      _id,
      tournament,
      { new: true }
    );
    res.status(200).json(updatedTournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTournament = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send(`Tournament with id: ${_id} does not exist.`);
    }
    await tournamentModel.findByIdAndRemove(_id);
    res.status(200).json({ message: "Tournament deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
