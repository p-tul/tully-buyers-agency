import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(90deg, #DB5B43 0%, #DF5E41 100%);
    text-align: center;
    color: white;
    padding: 40px 0;
`

const Content = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 40px 2rem 0;
`

const Testamonial = styled.div`
    margin: 0 2rem;
`

const Quote = styled.p`

`

const Atribute = styled.p`
    color: #ddd;
`

const Testamonials = () => {
    return (
        <Container>
            <h2>What Our Clients Have To Say</h2>
            <Content>
                <Testamonial>
                    <Quote>Tully Buyers Agency is f*ckin amazing! They saved me heaps of money!</Quote>
                    <Atribute>Anon.</Atribute>
                </Testamonial>
                <Testamonial>
                    <Quote>Tully Buyers Agency is f*ckin amazing! They saved me heaps of money!</Quote>
                    <Atribute>Anon.</Atribute>
                </Testamonial>
                <Testamonial>
                    <Quote>Tully Buyers Agency is f*ckin amazing! They saved me heaps of money!</Quote>
                    <Atribute>Anon.</Atribute>
                </Testamonial>
            </Content>
        </Container>
    )
}

export default Testamonials