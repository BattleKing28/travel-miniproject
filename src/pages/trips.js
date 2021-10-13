import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"

const trips = () => (
  <Layout>
    <Seo title="Trips" />
    <Trips heading="Some of the popular destinations!" />
  </Layout>
)

export default trips
