import React from "react"

function Header(){

	return(

		<div class="header clearfix">
		
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted"><img height="100" src="https://img.mobiscroll.com/demos/Audi_logo.png" /></h3>
      </div>

		)
}
export default Header