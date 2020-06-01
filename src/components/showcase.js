import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Button from '../components/button'

const Container = styled(BackgroundImage)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 513px;
    padding: 1rem 10rem;

    @media (max-width: 694px) {
        padding: 1rem;
    }
`

const Content = styled.div`
    color: white;
    max-width: 600px;
    text-align: center;
`

const Showcase = () => {
    const data = useStaticQuery(graphql`
        query Showcase {
            imageSharp(fluid: {originalName: {eq: "showcase.jpg"}}) {
                id
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `)

    return (
        <Container
            fluid={data.imageSharp.fluid}
        >
            <Content>
                <h1>QLD Buyers Agency</h1>
                <p>When it comes to buying property, it helps to have the professionals on your side</p>
                <Button primary to='/contact' text='Contact Us Now' />
            </Content>
        </Container>
    )
}

export default Showcase