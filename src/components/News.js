import React from "react"

class News extends React.Component {

	constructor() {
		super()
		this.state = {
			loading: false,
			apiNewsData : {}
		}
	}
	componentDidMount() {
        // ApI call example
         this.setState({loading: true})
        fetch("https://swapi.co/api/starships/3")
        	.then(responce => responce.json())
        	.then(data => { 
        		this.setState({
        			loading: false,
        			apiNewsData :data
        		})
        	})
    }

	render() {

		const text = this.state.loading ? "loading..." : this.state.apiNewsData.name

		return (
		<div>
			<h4> News 1</h4>
			<p> news 1 here</p>
			<h4> News 2</h4>
			<p> news 2 here</p>
			<h4> News 3( API data is loading)</h4>
			<p>{text}</p>

		</div>


		)

	}

	
}
export default News