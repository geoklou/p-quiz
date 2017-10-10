// import React from "react";
import React, { Component } from "react";
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
// import helpers from '../../utils/helpers';

class Form extends Component {
    // Setting the component's initial state
    state = {
      title: "",
      question: "",
      answer: "",
      hint: "",
      learning_std:""
    };  
  
    handleInputChange = event => {
      console.log(`${event.target.name} - ${event.target.value}`)
      // Getting the value and name of the input which triggered the change
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
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
          
          <div className="row">
          <div className="col-sm-6">
          <h3>Create Questions</h3>
           <p>Create questions that help students revisit what they have learned or what they need to learn before class.
           {this.state.username} 
          </p>
          <p>Search for learning standards that aligns with curriculum.</p>
 
          <form className="form">
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter subject"
              maxLength="200"
            />
            <br />
            <input
              value={this.state.question}
              name="question"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter question body"
            />
            <br />
            <input
              value={this.state.answer[0]}
              name="answer"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter option 1"
            />
            <br />
            <input
              value={this.state.answer[1]}
              name="answer"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter option 2"
            />
            <br />
            <input
              value={this.state.answer[2]}
              name="answer"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter option 3"
            />
            <br />
            <input
              value={this.state.answer[3]}
              name="answer"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter option 4"
            />
            <br />
            
            <input
              value={this.state.hint}
              name="hint"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter hint"
            />
            <br />
            <input
              value={this.state.alearning_std}
              name="learning_std"
              onChange={this.handleInputChange}
              type="text"
              placeholder="enter learning standard"
            />
            <br />
            <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </div>
            <div className="col-sm-6">
              <h3> Learning Standards</h3>
              <h2>this panel shows learning standards from http://commonstandardsproject.com/</h2>
              {this.newStandard}
            </div>
            </div>
            
        </div>
      );
    
       
    }
  }

  export default Form;