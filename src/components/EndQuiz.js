import React, { useContext,useState } from "react";
import { QuestionContext } from "../context/quizContext";
import axios from "axios";
const EndQuiz = () => {
  const { points, end_quiz, users } = useContext(QuestionContext);
  const [newUser, setNewUser] = useState('')
  console.log(users)

  const handleAddUser = async(e) => {
    e.preventDefault();
    const user = {name:newUser, points:points}
    console.log(JSON.stringify(user))
    axios.post('http://localhost:8080/users', user ).then( () => {
      alert('Sucess').catch(error => {console.log(error) 
        console.log('ERROR IN AXIOS')}
        )
    } )

  }
  return (
    <div>
      {end_quiz && (
        <div>
          <h3> Congratulations, You Reached the END </h3>
          <p> You scored {points} points </p>
          <h4>If you wish to write your score to database please fill the form below</h4>
          <h5> <a href='/'> Try Again </a></h5>
          <form>
            <label>
              Name
              <input type="text" onChange = {(e) => {setNewUser(e.target.value)}} />
            </label>
            <button type="submit" onClick = {handleAddUser}>Submit</button>
          </form>

          {points < 0 && (
            <div>
              <p> Here is a picture of a cute dog to cheer you up </p>
              <img src="https://www.rd.com/wp-content/uploads/2019/01/shutterstock_115329475.jpg?resize=300,300" />
            </div>
          )}
          
         	<table className='App'>
		<thead>
			<tr>
			<th> User </th>
      <th> Points </th>
			</tr>
		</thead>
		<tbody>
			
            {users.map(user=>{
              return (
                <tr>
              <td> {user.name}</td>
              <td> {user.points}</td>
              </tr>)
            })}
	
		
		</tbody>
	</table>

        </div>
      )}
    </div>
  );
};

export default EndQuiz;
