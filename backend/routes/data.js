const router = require("express").Router();
const Data = require("../models/data.model");
const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

//const upload= multer({dest:'uploads/'});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  cb(null, ["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype));
};

let upload = multer({ storage, fileFilter });

router.route("/").get((req, res) => {
  Data.find({}).exec(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

router.post("/add", upload.single("photo"), async (req, res) => {
  console.log(req.file);
  const username = req.body.username;
  const age = Number(req.body.age);
  const location = req.body.location;
  const date = Date.parse(req.body.date);
  const photo = req.file.filename;

  const newData = new Data({
    username,
    age,
    location,
    date,
    photo,
  });

  newData
    .save()
    .then(() => res.json("Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// multer
//router.use(express.static(__dirname+"./public/"));

router.route("/:id").get((req, res) => {
  Data.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Data.findByIdAndDelete(req.params.id)
    .then(() => res.json("data deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Data.findById(req.params.id)
    .then((data) => {
      data.username = req.body.username;
      data.age = Number(req.body.age);
      data.location = req.body.location;
      data.date = Date.parse(req.body.date);
      data.photo = req.file.originalname;

      data
        .save()
        .then(() => res.json("data updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
