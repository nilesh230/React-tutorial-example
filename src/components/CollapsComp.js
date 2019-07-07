import React from "react"


function CollapsComp(props) {
		console.log('---------'+JSON.stringify(props))
	return (
	 <div className="card">
            <div className="card-header" id={"heading" + props.item.id}>
                <h2 className="mb-0">
                    <button type="button" className="btn btn-link" data-toggle="collapse" data-target={"#collapse" + props.item.id}>{props.item.title}</button>									
                </h2>
            </div>
            <div id={"collapse"+ props.item.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <p>{props.item.data}</p>
                </div>
            </div>
        </div>
	
	)
}

export default CollapsComp