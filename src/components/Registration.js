import React from "react"

class Registration extends React.Component 
{
	constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            address:"",
            isFriendly: false,
            favColor:"blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
	  handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit(event) {
    	event.preventDefault()
    	console.log(document.getElementById('firstName').value)

    }
	render() {

        return (

            <form onSubmit={this.handleSubmit}> 
            <h3>{this.state.firstName} {this.state.lastName}</h3>
                <h3>You are a {this.state.gender}</h3>
                <h3>Your favorite color is {this.state.favColor}</h3>
                <h3>Address :{this.state.address}</h3>
                <p>{this.state.isFriendly}</p>
                <br />
            <div class="form-group">
			    <label for="email">First Name:</label>
			     <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName"
                    id="firstName"
                    placeholder="First Name" 
                    className="form-control"
                    onChange={this.handleChange} 
                />
			  </div>
			   <div class="form-group">
			    <label for="email">Last Name:</label>
			     <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName"
                    className="form-control" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
			  </div> 

			  <div class="form-group">
			    <label for="email">Address:</label>
			     <textarea 
			     	className="form-control"
			     	placeholder="Address"
			     	name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />
			  </div>

			  <div class="form-group">
			    <label for="email">Newsletter:</label>
			       <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Do you want Newsletter
			  </div> 

			  <div class="form-group">
			    <label for="email">Gender:</label>
			      <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male

                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female

			  </div>   
                
                {/* Formik */}
                <div class="form-group">
			    <label for="email">Favorite Color:</label>
			       <select 
			       className="form-control"
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
			  </div> 
			    <button className="btn btn-primary">Submit</button>
              </form>

        )
	}
}
export default Registration