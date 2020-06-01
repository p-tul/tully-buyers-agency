import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testamonials from "../components/testamonials"
import ContactForm from '../components/contactForm'
import Showcase from '../components/showcase'
import IconSection from '../components/iconSection'
import HomeContent from '../components/homeContent'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <HomeContent />
    <IconSection />
    <Testamonials />
    <ContactForm />
  </Layout>
)

export default IndexPage
