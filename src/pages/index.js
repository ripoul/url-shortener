import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainForm from "../components/mainForm"

function IndexPage () {

  return (
    <Layout>
      <SEO
        title="Home"
        keywords = {
          [
            `url`, 
            `shortener`,
            `url-shortener`,
            `shorten`,
            `provider`,
            `ripoul`
          ]
        }
      />
      <MainForm/>
    </Layout>
  )
}

export default IndexPage
