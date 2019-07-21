import React from "react"

class MameGenerator extends React.Component 
{
	constructor() {
		super()

		this.state = {

			randomImg: "http://i.imgflip.com/1bij.jpg",
			topText: "",
			bottomText: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(responce => responce.json())
			.then(responce => {
				const {memes} = responce.data
				this.setState({allImages : memes})
			})
	}

	handleSubmit(event) {
		event.preventDefault()
		const randNo = Math.floor(Math.random() * Math.floor(this.state.allImages.length))
		this.setState({

			randomImg : this.state.allImages[randNo].url
		})
	}
	handleChange(event) {
		 const {name, value} = event.target
         this.setState({ [name]: value })
	}

	render() {

		return(
			<div>
				<h4>Mame Generator</h4>
				<form className="meme-form" onSubmit={this.handleSubmit}>
					<input type="textbox" name="topText" placeholder="Top text" onChange = {this.handleChange} />
					<input type="textbox" name="bottomText" placeholder="bottomText" onChange = {this.handleChange} />
					<button>Gen</button>

					
				</form>
				<div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
			</div>
		)

	}

}

export default MameGenerator