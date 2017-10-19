import React, { Component } from "react";
// import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import API from "../../utils/API";

class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
    quizzes: [],
    question: "",
    answer: [],
    hint: ""
  };  
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

componentDidMount() {
  this.loadQuizzes();
  console.log();
}

loadQuizzes = () => {
  API.getQuizzes()
  .then(res =>  this.setState({quizzes: res.data}))
  .catch(err => console.log(err));
};

  componentWillMount() {
    API.getQuizzes();
    this.setState({
      question: this.state.question,
      answer: this.state.answer
    });
  }

    shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      while (0 !== currentIndex) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
  
    handleInputChange = event => {
      // console.log(`${event.target.name} - ${event.target.value}`)
      const { name, value } = event.target;
          // Updating the input's state
          this.setState({
            [name]: value
          });
        };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
    };
  
  render() {

    const content = this.state.quizzes.reverse().map((quiz, index )=>
    
    <div key={index}>

<div className="wrapper">
    <div className="row">
      <div className="col-sm-8">
          
          <form className="form">

            <p className="title">Subject: {quiz.title}</p>
            <p>Question: {quiz.question}</p>
            
          
            <p>Options:</p>

            <div className="row box">

              <div className="col-sm-10">
                {quiz.answer[0].text}
              </div>

              <div className="col-sm-2">
                  <label>a. {quiz.answer[0].correct}
                    <input type="checkbox" value="this.state.answer[0].correct" defaultChecked={false} />
                  </label>
              </div>

            </div>

            <div className="row box">
              <div className="col-sm-10">
                {quiz.answer[1].text}
              </div>
              <div className="col-sm-2">
                  <label>  b. {quiz.answer[1].correct}
                    <input type="checkbox" value="this.state.answer[1].correct" />
                  </label>
              </div>
            </div>
            
            <div className="row box">
              <div className="col-sm-10">
                {quiz.answer[2].text}
              </div>
              <div className="col-sm-2">
              <label> c. {quiz.answer[2].correct}
                <input type="checkbox" value="this.state.answer[2].correct" />
              </label>
              </div>
            </div>

            <div className="row box">
              <div className="col-sm-10">
                {quiz.answer[3].text}
              </div>
              <div className="col-sm-2">
                <label>  d. {quiz.answer[3].correct}
                  <input type="checkbox" value="this.state.answer[3].correct" />
                </label>
              </div> 

            </div>

           

          </form>  
      
        
        </div> 
        
        <div className="col-sm-4">
            <p>Hint: {quiz.hint}</p>
            <button className='btn btn-primary qbutton' onClick={this.handleFormSubmit}>Submit</button>
            </div>

            <div className="comments">
            <textarea style={{ height: 150 }}>
              Is this question too difficult for you? What do you think about science and math? 
              Tell us your story... (drag the bottom right corner to expand the box)
            </textarea>
              </div>
     
      </div>
      
      </div>

      </div>
      );
       
    return (
     
    <div>

      <h2>Take a Quiz</h2>
      <p>Try your best to answer the question. This will help you do well in class.</p>
      <p>And, don't forget to check out the hint.</p>
      { this.state.quizzes.length > 0 ? content : <h4>No Content To Display</h4> }
   
    </div>

      );
    }
  }
  
  export default Test;