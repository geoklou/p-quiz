// import React from "react";
import React, { Component } from "react";
import standards from '../../utils/standards';
// import StandardsDetail from '../Standards/details';
import data from '../../components/standardData.js';

class AAAS extends Component {
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
    // this.handleAnswerChange = this.handleAnswerChange.bind(this);
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

render() {

  return (

  <div>
    
    <div className="row">
        
      <p>Search for learning standards that aligns with curriculum.</p>
      
      <div className="col-sm-12">
        <h2> Learning Standards</h2>

        <div className='row'>            
            <div className="col-sm-8">
              <h6>American Association for the Advancement of Science Learning Standards</h6>

                {data.map(standard =>
                        <div key={standard.objectID}>
                        <p><strong> {standard.title} </strong> </p>
                        <p> {standard.desc} </p>
                        <p> {standard.text} </p>
                        </div>
                      )}
            </div>
            
            <div className="col-sm-3">

            <form className="form">

                <div className="form-group">
                <label htmlFor="select1" >Select Title</label>
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
                </select>
                <div>
    
            </div>

          </div>
        
        </form> 
        
        </div>
              <div className="col-sm-1">
                <button className="btn btn-primary" onClick={this.handleStandardQuerySubmit}>Look Up</button>
              </div>
 
        </div>

        </div>

      </div>
      
  </div>
);
}
}

export default AAAS;