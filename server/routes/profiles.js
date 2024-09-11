import express from "express";
import { Profile } from "../models/profile.js";

const router = express.Router();

router.get("/", (_, res) => {
  Profile.find().then((profiles) =>
    res.json(profiles).catch((err) => res.status(404))
  );
});

router.post("/", (req, res) => {
  res.json("post works");
});

router.put("/", (req, res) => {
  res.json("put works");
});

router.patch("/", (req, res) => {
  res.json("patch works");
});

router.delete("/:profileId", (req, res) => {
  res.json(`Profile ${req.params.profileId} deleted`);
});

export const profilesRouter = router;
