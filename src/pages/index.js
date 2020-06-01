import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../underConstruction.css'
import Logo from '../images/logo-white.png'

const IndexPage = ({data}) => (
	<div className='container' >
		<div className='content-wrapper'>
			<Img fluid={data.imageSharp.fluid} />
			<h1>Tully Buyers Agency</h1>
			<h2>Under Construction</h2>
			<p>If you have would like to get in touch, please call John Tully on <a href='tel:0414588744'>0414 588 744</a> or send us an <a href='mailto:john@tullybuyersagency.com.au' target='_blank'>email</a>.</p>
		</div>

	</div>
)

export const query = graphql`
	query Logo {
		imageSharp(fluid: {originalName: {eq: "logo-white.png"}}) {
			id
			fluid (maxWidth: 600) {
				...GatsbyImageSharpFluid
			}
		  }
	}
`

export default IndexPage
