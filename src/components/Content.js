import React from "react"
import CollapsComp from "./CollapsComp"
import collapsableContent from "./collapsableContent"
import News from "./News"
import Registration from "./Registration"
import MameGenerator from "./MameGenerator"



class Content extends React.Component {

	constructor() {
		super()
		this.state = {
			coldata: collapsableContent,
			count:0,
			isLoading: true,
			apiData : {}
		}
		this.countData = this.countData.bind(this)
		this.resetData = this.resetData.bind(this)

	}
	countData(){
		this.setState(prevState =>{
			return{
				count : prevState.count + 1,
				
			}
		})

	}
	componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)

        // ApI call example
        fetch("https://swapi.co/api/people/1")
        	.then(responce => responce.json())
        	.then(data => { 
        		this.setState({
        			apiData :data
        		})
        	})
    }
	resetData(){
        //console.log('called...')
            this.setState(prevState => {
            return {
                count:  0
            }
        })
    }
	render() {
		 const d = this.state.coldata.map(item => <CollapsComp key={item.id} item={item}/>)
		return(
		this.state.isLoading ?  <h4><i>Loading...</i></h4> :
		<div className="row marketing">
        <div className="col-lg-8">
		
			 <div class="bs-example">
				<div className="accordion" id="accordionExample">
					{d}
				</div>
			</div>
		
        </div>

        <div class="col-lg-3">
          <h4>Vote</h4>
           <h4>{this.state.count}</h4>
           <button onClick={this.countData}>Click</button>
           <button onClick={this.resetData}>reset</button>

           <News />
        </div>

        <div className="col-lg-4">
        	<Registration />
        </div>
        <div className="col-lg-4">
        </div>
        <div class="col-lg-3">
        <h4>API Example</h4>
        	<b>Name: </b> {this.state.apiData.name} 
        	<br/>
        	<b>Gender: </b> {this.state.apiData.gender}
       		<MameGenerator />
        </div>
      </div>


		)

	}
	
}
export default Content