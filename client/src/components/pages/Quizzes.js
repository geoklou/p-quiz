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
  .then(res => this.setState({quizzes: res.data}))
  .catch(err => console.log(err));
};

render() {
  const content = this.state.quizzes.map((quiz, index)=><div key={index}>{quiz.title}</div>);
 

  return (
    <div>
      <h3>All Questions</h3>
      
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