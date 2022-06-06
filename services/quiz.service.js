let questionCollection;
//let usersCollection;
exports.registerMongoClient = (_client) => {
  questionCollection = _client.db("quiz-app").collection("questions");
  usersCollection = _client.db('quiz-app').collection('users')
};

exports.addQuestion = async (req,res) => {
const question = req.body;
try{
  await questionCollection.insertOne(question)
}
catch(e) {
console.log(e)
}
  
} 


exports.getQuestions = async (req, res) => {
  try {
    const questions = await questionCollection.find().toArray();
    return res.json(questions);
  } catch (e) {
    console.error(e);
    console.log("ERROR CONNECTING TO DATABASE");
    res.sendStatus(400);
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await usersCollection.find().sort({points:-1}).toArray();
    return res.json(users)


  } catch (e) {
    console.error(e);
    console.log("ERROR WITH GETTING USERS AND CONNECTING");
    res.sendStatus(400);
  }
};

exports.addUser = async(req,res) => {
  const user = req.body;
  console.log(user)
  try{
      console.log(req)
      await usersCollection.insertOne(user)
    
    res.end()
  


}
catch (e) {
  console.error(e)
  
}

}