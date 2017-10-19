import React, { Component } from "react";
import data from '../../components/standardData.js';
// import FilteredData from "../../components/filteredData.js";

class AAAS extends Component {
    // Setting the component's initial state
    constructor(props) {
      super(props);
      this.state = {
        desc: "",
        title: "",
        text: ""
    };  
    this.handleInputChange = this.handleStandardQuerySubmit.bind(this);
  }

  componentDidMount(){
//show entire list

  }
  componentWiilMount(){
//show filtered list
  }

 handleStandardQuerySubmit = event => {
    console.log("target " + event.target.value);
    console.log('this' + this);
    event.preventDefault();
    this.setState({title: event.target.value});
}

render() {
  console.log(this.state.title === '');
  let filteredData;

  if (this.state.title === '') {
    filteredData = data;
  } else {
    filteredData = data.filter((course) => {
      return (course.title === this.state.title)
    });
  }

  return (
  <div>
    
    <div className="row">
      
      <div className="col-sm-12">
        <h2> Learning Standards</h2>
        <p>Search for learning standards that align with curriculum.</p>
        <div className='row'>            
            <div className="col-sm-8">
              <h6>American Association for the Advancement of Science Learning Standards</h6>

                {filteredData.map(standard =>
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
                <label htmlFor="select" >Select Topic</label>
                <select value={this.state.value} onChange={this.handleStandardQuerySubmit} className="form-control">
                  <option value="select">Select a topic</option>
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
                  <option value="Math, Science & Tech">Mathematics, Science, and Technology</option>
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
                <button className="btn btn-primary" onClick={this.handleStandardQuerySubmit}>List</button>
              </div>
        </div>


      </div>

    </div>
      
  </div>
);
}
}

export default AAAS;