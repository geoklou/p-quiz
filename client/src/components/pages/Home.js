import React, { Component } from "react";

// const Home = () =>
//   <div>
//     <h3>Home Page</h3>
//     <p>
//       Introduction:
//     </p>
//   </div>;

class Home extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
      <h2> Sign in</h2>
    
      <div className="container">
        <div className="row">
      <div className="col-sm-9 centered">
      <form className="form">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button className='btn btn-primary' onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
      </div>
      </div>
       </div>
    );
  }
}

export default Home;
