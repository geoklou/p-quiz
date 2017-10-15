import React, { Component } from "react";
// import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import API from "../../utils/API";

class Quizzes extends Component{
  state = {
    quizzes: []
};

componentDidMount() {
  this.loadQuizzes();
  console.log();
}

loadQuizzes = () => {
  API.getQuizzes()
  .then(res =>  this.setState({quizzes: res.data}))
  .catch(err => console.log(err));
};


render() {



  const content = this.state.quizzes.map((quiz, index)=>
  <div key={index}>


    

    <p><strong>Subject:</strong> {quiz.title}</p> 
    <p><strong>Question:</strong> {quiz.question}</p>
    <div>
      <ol>
      <li><strong>option {quiz.answer[0].option}.</strong> {quiz.answer[0].text} is {quiz.answer[0].correct.toString()}</li>
      <li><strong>option {quiz.answer[1].option}.</strong> {quiz.answer[1].text} is {quiz.answer[1].correct.toString()}</li>
      <li><strong>option {quiz.answer[2].option}.</strong> {quiz.answer[2].text} is {quiz.answer[2].correct.toString()}</li>
      <li><strong>option {quiz.answer[3].option}.</strong> {quiz.answer[3].text} is {quiz.answer[3].correct.toString()}</li>
      </ol>
   </div>
    <p><strong>Hint:</strong> {quiz.hint}</p>
    <p><strong>Learning Standard:</strong> {quiz.learning_std}</p>
    <p><strong>Created:</strong> {quiz.date}</p>
    <hr/>
    </div>);
    
      return (
        <div>
          <h2>All Questions</h2>
          
          { this.state.quizzes.length > 0 ? content : <h3>No Content To Display</h3> }
        </div>
          );


 


    }
  }

export default Quizzes;


/*

<List>
          {this.state.quizzes.map(quiz => (
            <ListItem key={quiz._id}>
              { <a href={"/quiz/" + quiz._id}> }
              <strong>
              {quiz.title}, {quiz.question}, {quiz.answer}, {quiz.hint} by {quiz.t_id}
            </strong>
          { </a> }
        </ListItem>
      ))}
    </List>

*/