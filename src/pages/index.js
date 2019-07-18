import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainForm from "../components/mainForm";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `url`, `shortener`]}
      />
        <MainForm/>
    </Layout>
  );
}

export default IndexPage;
