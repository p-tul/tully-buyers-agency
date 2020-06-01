import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Button from '../components/button'

const Container = styled.div`
    background: linear-gradient(90deg, #102542 0%, #183265 100%);
    display: flex;
    justify-content: space-evenly;
    padding: 60px 40px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: white;
    max-width: calc(960px / 3);

    h2 {
        margin-top: 1.45rem;
    }
`

const IconSection = () => {
    const data = useStaticQuery(graphql`
    query Icons {
        globe: imageSharp(fluid: {originalName: {eq: "globe.png"}}) {
          id
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
        people: imageSharp(fluid: {originalName: {eq: "people.png"}}) {
          id
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
        house: imageSharp(fluid: {originalName: {eq: "house.png"}}) {
          id
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      
    `)

    return (
        <Container>
            <Card>
                <Img fixed={data.people.fixed} alt={data.people.originalName} />
                <h2>First Home Owners</h2>
                <p>hbac ichcksdjhcsdkckajh casich jhc ksdjhc ksjchksdch ksjch ksdc ksjhciuahs cvoqc kajc i</p>
                <Button to='' text='Learn More' />
            </Card>
            <Card>
                <Img fixed={data.house.fixed} alt={data.house.originalName} />
                <h2>First Home Owners</h2>
                <p>hbac ichcksdjhcsdkckajh casich jhc ksdjhc ksjchksdch ksjch ksdc ksjhciuahs cvoqc kajc i</p>
                <Button to='' text='Learn More' />
            </Card>
            <Card>
                <Img fixed={data.globe.fixed} alt={data.globe.originalName} />
                <h2>First Home Owners</h2>
                <p>hbac ichcksdjhcsdkckajh casich jhc ksdjhc ksjchksdch ksjch ksdc ksjhciuahs cvoqc kajc i</p>
                <Button to='' text='Learn More' />
            </Card>
        </Container>
    )
}

export default IconSection