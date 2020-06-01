import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Button from '../components/button'

const Container = styled.div`
    background: linear-gradient(90deg, #102542 0%, #183265 100%);
    color: white;
    display: flex;
    justify-content: space-evenly;
    padding: 40px 1rem;

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

const Nav = styled.div`
    display: flex;
    flex-direction: column;
`

const Contact = styled.div`

`

const Footer = () => {
    return (
        <Container>
            <Nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>What We Do</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </Nav>
            <Contact>
                <h4>Contact</h4>
                <div><a href='tel:0414588744'>0414 588 744</a></div>
                <Button to='/contact' text='Contact Us' />
            </Contact>
          {/* © {new Date().getFullYear()} */}
        </Container>
    )
}

export default Footer