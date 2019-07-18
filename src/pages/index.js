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
            `gatsby`, 
            `tailwind`, 
            `react`, 
            `tailwindcss`, 
            `url`, 
            `shortener`
          ]
        }
      />
      <MainForm/>
    </Layout>
  )
}

export default IndexPage
