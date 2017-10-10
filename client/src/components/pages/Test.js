import React, { Component } from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';

// import helpers from '../helpers';

class Test extends Component {
    // Setting the component's initial state
    state = {
      title: [],
      question: "",
      answer: [],
      hint: "",
      learning_std:""
    };  
  
    handleInputChange = event => {
      console.log(`${event.target.name} - ${event.target.value}`)
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
      // ach input has a `value`, `name`, and `onChange` prop
      return (
  
          <div>
            <h4>Try your best to answer the question. This will help you do well in class.
            <p>And, don't forget to check out the hint.</p>
            
             </h4>
             <h2>this page needs to retrieve quizzes, one at a time</h2>
          <p>
            {this.state.username}
          </p>
          
          <div className="row">
          <div className="col-sm-8">
          <form className="form">
            <p>Subject:</p>
            <p>{this.state.title}</p>
            <p>Question:</p>
            <p>{this.state.question}</p>
            <p>Options:</p>
                <RadioGroup onChange={ this.onChange } vertical>
                <RadioButton value="this.state.answer[0]">
                  Option 1 {this.state.answer[0]}
                </RadioButton>
                <RadioButton value="this.state.answer[1]">
                  Option 2 {this.state.answer[1]}
                </RadioButton>
                <RadioButton value="this.state.answer[2]">
                  Option 3 {this.state.answer[2]}
                </RadioButton>
                <RadioButton value="this.state.answer[3]">
                  Option 4 {this.state.answer[3]}
                </RadioButton>
              </RadioGroup>
            </form>

            {/* <form> */}
        {/* <div className="radio">
          <label>
            <input type="radio" value="this.state.answer[0]" checked={true} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="this.state.answer[1]" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="this.state.answer[2]" />
            Option 3
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="this.state.answer[3" />
            Option 4
          </label>
        </div> */}
        {/* </form> */}

            <button className='btn btn-primary' onClick={this.handleFormSubmit}>Submit</button>
            </div>
            <div className="col-sm-4">
              <p>Hint:</p>
            <p>{this.state.hint}</p>
          
            </div>
            </div>
            </div>
      );
    }
  }
  
  export default Test;