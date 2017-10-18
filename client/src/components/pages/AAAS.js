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

  // componentDidMount() {    
  //   fetch('../components/standardData.json')
  //   .then(response => response.json())
  //   .then(data => this.setState({ standards: data.standards }));
  // }

  componentDidMount(){
//show entire list

  }
  componentWiilMount(){
//show filtered list
  }

  // sortStandards = (data) => {
  //   var obj = [this.state.data];
  //   var field = data.title;
  //   obj.sort(field)
    
  //   this.props.sortBy(field);
  //   obj.map((item, i) => (<div key={i}> {item.desc}  
  //                         {item.title} {item.text}</div>)
  //   )
  // }

 handleStandardQuerySubmit = event => {
    console.log("target " + event.target.value);
    console.log('this' + this);
    event.preventDefault();
    this.setState({title: event.target.value});
    var filteredData = [];
    var selectedTitle = data.filter(function(title){
      for(var i = 0; i < data.length ; i++){
        if(selectedTitle === title)
        filteredData.push(data[i]);
      }
      console.log('title: ' + title);
      console.log('filtered data: ' + filteredData);
    });
        filteredData.map(sd =>
          <div key={sd.title}>
          <p><strong> {filteredData.title} </strong> </p>
          <p> {sd.desc} </p>
          <p> {sd.text} </p>
          </div>
        )
        // return item.title === this.state.title;
      // })
    // }
}

render() {
  return (

  <div>
    
    <div className="row">
      
      <div className="col-sm-12">
        <h2> Learning Standards</h2>
        <p>Search for learning standards that aligns with curriculum.</p>
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
                <label htmlFor="select" >Select Title</label>
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
              {/* <FilteredData /> */}
        </div>


      </div>

    </div>
      
  </div>
);
}
}

export default AAAS;