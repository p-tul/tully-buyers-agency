import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 5rem;
`

const InputRow = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    
    div {
        flex-grow: 1;
    }

    input, textarea {
        width: 100%;
        padding: 6px 10px;
        border: 1px solid #102542;
        border-radius: 2px;
    }

    textarea {
        height: 250px;
        /* overflow: scroll; */
        resize: none;
    }
`

const StyledForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
`

const Heading = styled.h2`
    text-align: center;
    color: #102542;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: linear-gradient(90deg, #3F9838 0%, #3CAE3A 100%);
    border-radius: 5px;
    border: none;
    color: white;
`

const Left = styled.div`
    margin-right: 0.75rem;
`

const Right = styled.div`
    margin-left: 0.75rem;
`

const ContactForm = () => {
    return (
        <Container>
            <StyledForm>
                <Heading>Contact Us Today</Heading>
                <InputRow>
                    <Left>
                        <input name='full-name' type='text' placeholder='Full Name*' required/>
                    </Left>
                    <Right>
                        <input name='phone' type='text' placeholder='Phone' />
                    </Right>
                </InputRow>
                <InputRow>
                    <input name='email' type='email' placeholder='Email*' required/>
                </InputRow>
                <InputRow>
                    <textarea name='message' type='text' placeholder='Message*' required/>
                </InputRow>
                <InputRow>
                    <Button type='submit' >Submit</Button>
                </InputRow>
            </StyledForm>
        </Container>
    )
}

export default ContactForm