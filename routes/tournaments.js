import express from "express";
import {
  getTournament,
  getTournaments,
  createTournament,
  deleteTournament,
  updateTournament,
} from "../controllers/tournaments.js";

const router = express.Router();

router.get("/", getTournaments);
router.get("/:id", getTournament);
router.post("/new", createTournament);
router.delete("/:id", deleteTournament);
router.patch("/:id", updateTournament);

export default router;
