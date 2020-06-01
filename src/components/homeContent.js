import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Button from '../components/button'

const Container = styled.div`
    margin: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SectionHeading = styled.h2`
    /* text-align: center; */
`

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;

    p {
        max-width: 500px;
    }
    
    .mr {
        margin-right: 3rem;
    }
`

const Placeholder = styled.div`
    min-height: 200px;
    min-width: 200px;
    background: grey;
`


const HomeContent = () => {
    return (
        <Container>
            <SectionHeading>What Does A Buyers Agent Do?</SectionHeading>
            <Card>
                <p className='mr'>kjfhkf akchakdha kudha sjcxbauxi ciuchiauc idsc zkjxcb mzbc hzb czbc zmhbc zyuc  zbc shcvksaihfoiqw foe kh ekuqhw kfhs keufh skiurg iuaf ieuv rv iu viu </p>
                <Placeholder />
            </Card>
            <Card>
                <Placeholder className='mr' />
                <p>kjfhkf akchakdha kudha sjcxbauxi ciuchiauc idsc zkjxcb mzbc hzb czbc zmhbc zyuc  zbc shcvksaihfoiqw foe kh ekuqhw kfhs keufh skiurg iuaf ieuv rv iu viu </p>
            </Card>
            <Card>
                <p className='mr'>kjfhkf akchakdha kudha sjcxbauxi ciuchiauc idsc zkjxcb mzbc hzb czbc zmhbc zyuc  zbc shcvksaihfoiqw foe kh ekuqhw kfhs keufh skiurg iuaf ieuv rv iu viu </p>
                <Placeholder />
            </Card>
        </Container>
    )
}
 export default HomeContent