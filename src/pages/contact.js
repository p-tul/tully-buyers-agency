import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testamonials from "../components/testamonials"
import ContactForm from '../components/contactForm'
import Showcase from '../components/showcase'

const Content = styled.div`
    margin: 40px;
    display: flex;
    justify-content: center;
    text-align: center;

    hr {
        width: 90%;
        margin: 0 auto;
    }
`

const Container = styled.div`
    max-width: 600px;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Content>
        <Container>
            <h2>Begin Your Journey To Financial Freedom</h2>
            <p>lorem</p>
            <hr />
        </Container>
    </Content>
    <ContactForm />
    <Testamonials />
  </Layout>
)

export default ContactPage
