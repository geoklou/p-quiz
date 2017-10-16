import React, { Component } from "react";
import API from "../../utils/API";
// import { checkboxGroup, checkboxButton } from 'react-checkbox-buttons';

class Test extends Component {
    // Setting the component's initial state
    state = {
      quizzes: [],
      question: "",
      answer: [],
      hint: ""
    };  

    componentDidMount(){
      // this.loadQuizzes();
    }

    loadQUizzes = () => {
      API.getQuizzes()
      .then(res =>
      this.setState({
        quizzes: res.data,
        title: "",
        question: "",
        answer: [
          {
            option: "a", 
            text: "", 
            correct: ""},
          {
            option: "b", 
            text: "", 
            correct: ""},
          {
            option: "c", 
            text: "", 
            correct: ""},
          {
            option: "d", 
            text: "", 
            correct: ""
          },
        ],
        hint: ""
      })
    )
    .catch(err => console.log(err))
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
    // const content = this.state.quizzes.map((quiz, index)=>
    // <div key={index}>
    return (
     
    <div>

      <h2>Take a Quiz</h2>
      <p>Try your best to answer the question. This will help you do well in class.</p>
      <p>And, don't forget to check out the hint.</p>
      
        <div className="row">
          <div className="col-sm-8">

          <form className="form">
        
          {/* {this.state.quizzes.length ? (
            <li key={quiz.date}>
            {this.state.quizzes.map(book => ( */}

            <p>Subject: {this.state.title}</p>
            <p>Question: {this.state.question}</p>
            <p>Options:</p>

            <div className="row">
              <div className="col-sm-10">
              {this.state.answer.text}
              </div>
              <div className="col-sm-2">
                  <label>
                    <input type="checkbox" value="this.state.answer[0].correct" defaultChecked={false} />
                    Option 1 {this.state.answer.correct}
                  </label>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10">
                {/* {this.state.answer[1].text} */}
                {this.state.answer}
              </div>
              <div className="col-sm-2">
                  <label>
                    <input type="checkbox" value="this.state.answer[1].correct" />
                    Option 2 {this.state.answer.correct}
                  </label>
              </div>
            </div>
            
            <div className="row">
              <div className="col-sm-10">
                {this.state.answer.text}
              </div>
              <div className="col-sm-2">
              <label>
                <input type="checkbox" value="this.state.answer[2].correct" />
                Option 3 {this.state.answer.correct}
              </label>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10">
                {this.state.answer.text}
              </div>
              <div className="col-sm-2">
                <label>
                  <input type="checkbox" value="this.state.answer[3].correct" />
                  Option 4 {this.state.answer.correct}
                </label>
              </div> 
            </div>

            <div className='row'>
              <div className="col-sm-8">
              <p>Hint: {this.state.hint}</p>
              </div>
            </div>

          <button className='btn btn-primary' onClick={this.handleFormSubmit}>Submit</button>
  
    
          </form> 

        </div>
    </div>
  </div>

      );
    }
  }
  
  export default Test;