import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledButton = styled.div`
    display: inline-block;
    margin: 1rem 0;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    background: linear-gradient(90deg, #3546A3 0%, #3633BA 100%);
    /* background: ${props => props.primary ? `linear-gradient(90deg, #3546A3 0%, #3633BA 100%)` : `green`}; */
    border-radius: 5px;
    
    a {
        text-decoration: none;
        color: white;
    }
`

const Button = props => {
    return (
        <StyledButton>
            <Link to={props.to} >{props.text}</Link>
        </StyledButton>
    )
}

export default Button