import React from "react"
import CollapsComp from "./CollapsComp"
import collapsableContent from "./collapsableContent"
import News from "./News"



class Content extends React.Component {

	constructor() {
		super()
		this.state = {
			coldata: collapsableContent,
			count:0
		}
		this.countData = this.countData.bind(this)
		this.resetData = this.resetData.bind(this)

	}
	countData(){
		this.setState(prevState =>{
			return{
				count : prevState.count + 1
			}
		})

	}
	resetData(){
        console.log('called...')
            this.setState(prevState => {
            return {
                count:  0
            }
        })
    }
	render() {
		 const d = this.state.coldata.map(item => <CollapsComp key={item.id} item={item}/>)
		return(

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
      </div>


		)

	}
	
}
export default Content