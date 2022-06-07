
let userCollection;
exports.registerMongoClient = (_client)=>{
    userCollection = _client.db('quiz-app').collection('users')
}

console.log('IN USER SERVICE')

exports.getAllUsers = async (req,res) => {
    try{
        const users = await userCollection.find().toArray();

        return res.json(users)
    }
    catch (e) {
        console.log('ERROR in getAll')
        console.log(e)
        res.sendStatus(400);
    }
}

