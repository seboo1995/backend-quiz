const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require('dotenv').config();

const userService = require('./services/user.service')
const quizService = require("./services/quiz.service");

let client = null;
let questionsCollection = null;

MongoClient.connect(process.env.MONGO_HOST)
  .then((_client) => {
    client = _client;
    questionsCollection = _client.db("quiz-app").collection("questions");
    quizService.registerMongoClient(_client);
    userService.registerMongoClient(_client);
  })
  .catch(console.error);

// app

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.end("Hello from Quiz Backend");
});
app.get("/questions", quizService.getAllQuestions);
//app.get("/users", quizService.getUsers);
//app.post("/users", quizService.addUser)
//app.post('/questions',quizService.addQuestion)
app.get('/users', userService.getAllUsers);
app.listen(process.env.PORT, () => {
  console.log("Listening on 8080");
});