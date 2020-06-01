import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
    background: linear-gradient(90deg, #102542 0%, #183265 100%);
    display: flex;
    justify-content: center;

`

const StyledLink = styled(Link)`
    color: white;
    margin: 24px 30px;
    text-transform: uppercase;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Nav>
            <StyledLink to='/' >Home</StyledLink>
            <StyledLink to='/services' >What We Do</StyledLink>
            <StyledLink to='/pricing' >Pricing</StyledLink>
            <StyledLink to='/contact' >Contact</StyledLink>
        </Nav>
    )
}

export default NavBar