import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFormQrcode from "../components/MainFormQrcode"

function Qrcode () {

  return (
    <Layout>
      <SEO
        title="Qrcode shortener"
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
      <MainFormQrcode/>
    </Layout>
  )
}

export default Qrcode
