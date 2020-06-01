import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import BG from '../images/headerBG.jpg'

const StyledHeader = styled.header`
	background-colour: black;
	background-image: url(${BG});
	background-position: center center;
	opacity: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px;
`

const StyledImage = styled(Img)`
	width: 350px;
`

const Overlay = styled.div`
	background: black;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	position: absolute;
`



const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			logo: imageSharp(fluid: {originalName: {eq: "logo-white.png"}}) {
				id
				fluid(maxWidth: 350) {
					...GatsbyImageSharpFluid
				}
			}
			background: imageSharp(fluid: {originalName: {eq: "headerBG.jpg"}}) {
				id
				fluid(
                    duotone: {
                        highlight: "#444444",
                        shadow: "#000000"
                  }) {
					...GatsbyImageSharpFluid
				}
			}
		}
  	`)

	return (
		<StyledHeader>
			{/* <Overlay></Overlay> */}
			<Link>
				<StyledImage fluid={data.logo.fluid} />
			</Link>
		</StyledHeader>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
