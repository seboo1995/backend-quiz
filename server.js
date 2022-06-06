const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const fs = require("fs");

const connectionString = fs.readFileSync("./mongoString.txt").toString("utf-8");
console.log(connectionString);

const quizService = require("./services/quiz.service.js");

let client = null;
let questionsCollection = null;

MongoClient.connect(connectionString)
  .then((_client) => {
    client = _client;
    questionsCollection = _client.db("quiz-app").collection("questions");
    quizService.registerMongoClient(_client);
  })
  .catch(console.error);

// app

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.end("Hello from Quiz Backend");
});

app.get("/questions", quizService.getQuestions);
app.get("/users", quizService.getUsers);
app.post("/users", quizService.addUser)
app.post('/questions',quizService.addQuestion)
app.listen(8080, () => {
  console.log("Listening on 8080");
});
