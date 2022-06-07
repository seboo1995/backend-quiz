
let questionCollection;
exports.registerMongoClient = (_client)=>{
    questionCollection = _client.db('quiz-app').collection('questions')
}


exports.getAllQuestions = async (req,res) => {
    try{
        const questions = await questionCollection.find().toArray();
        return res.json(questions)
    }
    catch (e) {
        console.log('ERROR in getAllQuestions')
        console.error(e)
        res.sendStatus(400);
    }
}

