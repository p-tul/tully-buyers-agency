import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testamonials from "../components/testamonials"
import ContactForm from '../components/contactForm'


const PricingPage = () => (
  <Layout>
    <SEO title="Pricing" />
    <Testamonials />
    <ContactForm />
  </Layout>
)

export default PricingPage
