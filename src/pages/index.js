import React from "react"

import '../underConstruction.css'
import Logo from '../images/logo-white.png'

const IndexPage = () => (
	<div className='container' >
		<div className='content-wrapper'>
			<img src={Logo} />
			<h1>Tully Buyers Agency</h1>
			<h2>Under Construction</h2>
			<p>If you have would like to get in touch, please call John Tully on <a href='tel:0414588744'>0414 588 744</a> or send us an <a href='mailto:john@tullybuyersagency.com.au' target='_blank'>email</a>.</p>
		</div>

	</div>
)

export default IndexPage
