// import React from "react";
import React, { Component } from "react";
import API from "../../utils/API";
import standards from '../../utils/standards';
import StandardsDetail from '../Standards/details'
// https://reactjs.org/docs/forms.html
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
          option_0: "a", 
          text_0: "", 
          correct_0: ""},
        {
          option_1: "b", 
          text_1: "", 
          correct_1: ""},
        {
          option_2: "c", 
          text_2: "", 
          correct_2: ""},
        {
          option_3: "d", 
          text_3: "", 
          correct_3: ""
        },
      ],
      hint: "",
      learning_std:""
    };  
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.updateQuiz();
  }

  updateQuiz = () => {
    API.saveQuiz()
      .then(res =>
        this.setState({ 
          quizzes: res.data, 
          title: "", 
          question: "", 
          // answer: ["", "", "", ""],
// answer: [{option_0, text_0, correct_0}, {option_1, text_1, correct_1}, {option_2, text_2, correct_2},{option_3, text_3, correct_3}],
// answer: 
// [this.state.answer[0].push('a',this.state.answer[0].text,this.state.answer[0].correct),
// this.state.answer[1].push('b',this.state.answer[1].text,this.state.answer[1].correct),
// this.state.answer[2].push('c',this.state.answer[2].text,this.state.answer[2].correct),
// this.state.answer[3].push('d',this.state.answer[3].text,this.state.answer[3].correct),
// ],
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

handleInputChange = event => {
  console.log(`${event.target.name} - ${event.target.value}`)
  // Getting the value and name of the input which triggered the change
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  // const { name, value } = event.target;
  // Updating the input's state
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
   // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  // if (this.state.question && this.state.answer) {
    API.saveQuiz({
      title: this.state.title,
      question: this.state.question,
      // answer: this.state.answer.push([{},{},{},{}]),
      // {this.state.answer[0].correct}
      // answer: this.state.answer.push(
      //   {option,text_0,correct_0},
      //   {option,text_1,correct_1},
      //   {option,text_2,correct_2},
      //   {option,text_3,correct_3}
      // ),
      answer: 
      [this.state.answer[0].text.push(this.state.answer[0].text),
      this.state.answer[0].correct.push(this.state.answer[0].correct)],
      // // [
      //   {'a','this.state.answer[0].text','this.state.answer[0].correct'},
      //   {'b','this.state.answer[1].text','this.state.answer[1].correct'},
      //   {'c','this.state.answer[2].text','this.state.answer[2].correct'},
      //   {'d','this.state.answer[3].text','this.state.answer[3].correct'},
      // // ]
    // ),
      // answer: 
      // [this.state.answer[0].push('a',this.state.answer[0].text,this.state.answer[0].correct),
      // this.state.answer[1].push('b',this.state.answer[1].text,this.state.answer[1].correct),
      // this.state.answer[2].push('c',this.state.answer[2].text,this.state.answer[2].correct),
      // this.state.answer[3].push('d',this.state.answer[3].text,this.state.answer[3].correct),
      // ],
      hint: this.state.hint,
      learning_std: this.state.learning_std,
    })
      .then(res => this.updateQuiz())
      .catch(err => console.log(err)); // error 422 !!! cannot poat to api/quizzes
  // }
};

// searchStandards = query => {
//   standards.search(query)
//     .then(res => this.setState({ result: res.data }))
//     .catch(err => console.log(err));
// };

//standards
findAllStandards = () =>{
standards.getStandards()
.then(res =>
this.setState({
  gradeLev: this.state.gradeLev,
  title: this.state.title,
  desc: this.state.desc,
  text: this.state.text
})
)
.catch(err => console.log(err)); 
}

handleStandardQuerySubmit = event => {
  event.preventDefault();
  this.findAllStandards();
    // standards.standardsFound({
    //   gradeLev: this.state.gradeLev,
    //   title: this.state.title,
    //   description: this.state.description,
    //   text: this.state.text
  };


render() {
 // Notice how each input has a `value`, `name`, and `onChange` prop
  console.log(this.state.answer);
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

      <h4>Option a:</h4>
        <input
          // value={this.state.answer[0].text}
          value={this.state.answer[0].text}
          name="text_0"
          onChange={this.handleInpuChange}
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
          onChange={this.handleInputChange} />
        </label>
      </div>
      </div>
      
      <div className="row">
      <div className="col-sm-10">
        <h4>Option b:</h4>
        <input
          value={this.state.answer[1].text}
          name="text_1"
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange} />
      </label>
      </div>
      </div>

      <div className="row">
      <div className="col-sm-10">
        <h4>Option c:</h4>
        <input
          value={this.state.answer[2].text}
          name="text_2"
          onChange={this.handleInputChange}
          type="text"
          placeholder="enter option 3"
        />
      </div>
      <div className="col-sm-2">
        <label>Check if correct:
        <input
          value={this.state.answer[2].correct}
          name="correct_2"
          type="checkbox"
          checked={this.state.correct}
          onChange={this.handleInputChange} />
        </label>
      </div>
      </div>
    
      <div className="row">
      <div className="col-sm-10">
        <h4>Option d:</h4>
        <input
          value={this.state.answer[3].text}
          name="text_3"
          onChange={this.handleInputChange}
          type="text"
          placeholder="enter option 4"
        />
      </div>
      <div className="col-sm-2">
        <label>Check if correct:
        <input
          value={this.state.answer[3].correct}
          name="correct_3"
          type="checkbox"
          checked={this.state.correct}
          onChange={this.handleInputChange} />
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
        placeholder="enter learning standard"
      />
      <br />
      <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>

{/* learning standards start here */ }
      <div className="col-sm-4">
        <h2> Learning Standards</h2>
        {this.newStandard}
        {/* <option value={option.value} selected={optionsState == option.value}>{option.label}</option> */}
        <div className='row'>
        <form className="form">
        <div className="col-sm-8">
        Select Grade:  
        <select>
       <option value="1">Grade 6</option>
        <option value="2">Grade 7</option>
        </select>
        <br />
    
        </div>
        <div className="col-sm-4">
        <button className="btn btn-primary left" onClick={this.handleStandardQuerySubmit}>Look Up</button>
          <br />
          {this.state.result
            ? <StandardsDetail
                gradeLev={this.state.result.gradeLev}
                title={this.state.result.title}
                desc={this.state.result.desc}
                text={this.state.result.text}
              />
            : <p>No Results to Display</p>}

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