// import React from "react";
import React, { Component } from "react";
import API from "../../utils/API";
import standards from '../../utils/standards';
// import StandardsDetail from '../Standards/details';
// import data from '../../components/standardData.js';

class Form extends Component {
    // Setting the component's initial state
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        question: "",
        answer: [
          //same names as form fields
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
        hint: "",
        learning_std:""
    };  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  createQuiz = () => {
    API.saveQuiz()
      .then(res =>
        this.setState({ 
          quizzes: res.data, 
          title: "", 
          question: "", 
          answer: [
            {option:"",text:"",correct:""},
            {option:"",text:"",correct:""}, 
            {option:"",text:"",correct:""}, 
            {option:"",text:"",correct:""}
          ],
          hint: "",
          learning_std: ""})
        )
      .catch(err => console.log(err)); 
  };

  handleAnswerChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const index = +target.name.split("_")[1]
    const name = target.name.split("_")[0];
    const answers = this.state.answer;
    //set state of array values by index and key
    answers[index][name] = value;
    this.setState({
      answer: answers
    })
  }

  handleInputChange = event => {
    console.log(`${event.target.name} - ${event.target.value}`)
    // Getting the value and name of the input which triggered the change
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    alert('One record added.');
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (this.state.question && this.state.answer) {
      API.saveQuiz(this.state)
        .then(res => this.createQuiz()) //change updateQuiz to createQuiz
        .catch(err => console.log(err)); 
  };

  //standards
  findAllStandards = () =>{
  standards.getStandards()
  .then(res =>
    this.setState({
      standards: res.data, 
      title: this.state.title,
      desc: this.state.desc,
      text: this.state.text
    })
    )
    .catch(err => console.log(err)); 
    }

  componentDidMount() {    
    fetch('../components/standardData.json')
    .then(response => response.json())
    .then(data => this.setState({ standards: data.standards }));
  }

  handleStandardQuery = event => {
    event.preventDefault();
    fetch('../components/standardData.json')
    .then(function(err, res) {
      if (err) {
        throw err;
      }
      return res;
    })
    .then(function(res) {
        this.setState({
        title: res.title,
        desc: res.desc,
        text: res.text
    })
    })
      .catch(err => console.log(err)); 
    };

 handleStandardQuerySubmit = event => {
    console.log(event.target.value);
    console.log(this);
    event.preventDefault();
    let tempData = [];
    tempData.push({});
    return tempData;
}

handleSearch = event => {
  event.preventDefault();
  window.location = './standards';
}

render() {

  return (

  <div>
    
    <div className="row">
      <div className="col-sm-8">
      <h2>Create Questions</h2>
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
            type="textarea"
            placeholder="enter question body"
          />
        <br />

        <div className="row">
          <div className="col-sm-10">
            {/* <h4>Option a:</h4> */}
              <input
                value={this.state.answer[0].text}
                name="text_0"
                onChange={this.handleAnswerChange}
                type="text"
                placeholder="enter option 1"
              />
          </div>
          <div className="col-sm-2">
            <label>Check if correct:
              <input
                value={this.state.answer[0].correct}
                name="correct_0"
                type="checkbox"
                checked={this.state.correct}
                onChange={this.handleAnswerChange} />
            </label>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-10">
            {/* <h4>Option b:</h4> */}
              <input
                value={this.state.answer[1].text}
                name="text_1"
                onChange={this.handleAnswerChange}
                type="text"
                placeholder="enter option 2"
              />
          </div>
          <div className="col-sm-2">
            <label>Check if correct:
              <input
                value={this.state.answer[1].correct}
                name="correct_1"
                type="checkbox"
                checked={this.state.correct}
                onChange={this.handleAnswerChange} />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10">
            {/* <h4>Option c:</h4> */}
              <input
                value={this.state.answer[2].text}
                name="text_2"
                onChange={this.handleAnswerChange}
                type="text"
                placeholder="enter option 3"/>
          </div>
          <div className="col-sm-2">
            <label>Check if correct:
              <input
                value={this.state.answer[2].correct}
                name="correct_2"
                type="checkbox"
                checked={this.state.correct}
                onChange={this.handleAnswerChange} />
            </label>
          </div>
        </div>
      
        <div className="row">
          <div className="col-sm-10">
            {/* <h4>Option d:</h4> */}
              <input
                value={this.state.answer[3].text}
                name="text_3"
                onChange={this.handleAnswerChange}
                type="text"
                placeholder="enter option 4"/>
          </div>
          <div className="col-sm-2">
            <label>Check if correct:
              <input
                value={this.state.answer[3].correct}
                name="correct_3"
                type="checkbox"
                checked={this.state.correct}
                onChange={this.handleAnswerChange} />
            </label>
          </div>
        </div>
        
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
            placeholder="enter learning standard"/>
        <br />
          <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>

  {/* learning standards start here */ }
      <div className="col-sm-4">
        <h2> Learning Standards</h2>
          {/* {this.newStandard} */}

        <div className='row'>
          <form className="form">
            
            <div className="col-sm-8">
              <h6>American Association for the Advancement of Science Learning Standards</h6>

              <div className="form-group">
                <br />
            {/* <label htmlFor="select1" >Select Title</label>
            <select value={this.state.value} onChange={this.handleStandardQuerySubmit} className="form-control">
              <option value="select">Select a title</option>

              <option value="Abilities of Technological Design">Abilities of Technological Design</option>
              <option value="Algebra">Algebra</option>
              <option value="Chemical Reactions">Chemical Reactions</option>
              <option value="Conservation of Energy">Conservation of Energy</option>
              <option value="Energy Transformations">Energy Transformations</option>
              <option value="Energy Sources and Use">Energy Sources and Use</option>
              <option value="Flow of Matter and Energy">Flow of Matter and Energy</option>
              <option value="Forces of Nature">Forces of Nature</option>
              <option value="Geometry">Geometry</option>
              <option value="Interactions of Energy and Matter">Interactions of Energy and Matter</option>
              <option value="Mathematics, Science, and Technology">Mathematics, Science, and Technology</option>
              <option value="Measurement">Measurement</option>
              <option value="Motion">Motion</option>
              <option value="Scientific Inq">Scientific Inq</option> 

            </select> */}

            </div>

              <br />
            </div>
            
            <div className="col-sm-4">

            <button className="btn btn-primary" onClick={this.handleSearch}>Look Up</button>
              <br />

             
                 <div>
                  

                  
                </div>
             
            </div>

          </form> 
        </div>

        </div>

      </div>
      
  </div>
);
}
}


export default Form;