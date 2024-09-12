import express from "express";
import { Profile } from "../models/profile.js";

const router = express.Router();

router.get("/", (_, res) => {
  Profile.find().then((profiles) =>
    res.json(profiles).catch((err) => res.status(404))
  );
});

router.post("/", (req, res) => {
  const newProfile = new Profile({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    about: req.body.about,
    projects: req.body.projects,
    work: req.body.work,
    skills: req.body.skills,
    education: req.body.education,
  });

  newProfile
    .save()
    .then((profile) => res.json(profile))
    .catch((err) => res.status(404));
});

router.put("/", (req, res) => {
  Profile.findByIdAndUpdate.findOneAndUpdate(
    { _id: req.body._id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      about: req.body.about,
      projects: req.body.projects,
      work: req.body.work,
      skills: req.body.skills,
      education: req.body.education,
    },
    { new: true }
  );
});

// router.patch("/", (req, res) => {
//   Profile.findByIdAndUpdate.findOneAndUpdate(
//     { _id: req.body._id },
//     {
//       $set: {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         phone: req.body.phone,
//         location: req.body.location,
//         about: req.body.about,
//         projects: req.body.projects,
//         work: req.body.work,
//         skills: req.body.skills,
//         education: req.body.education,
//       },
//     },
//     { new: true }
//   );
// });

router.delete("/:profileId", (req, res) => {
  Profile.findByIdAndDelete(req.params.profileId)
    .then((profile) => res.json(profile))
    .catch((err) => res.status(404));
});

export const profilesRouter = router;
