import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => {
  return (
    <Layout>
      <Seo title="Trips" />
      <Head>about</Head>
    </Layout>
  )
}
export default about

const Head = styled.div`
  color: #333;
  background: green;
`
