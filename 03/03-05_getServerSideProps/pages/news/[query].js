import Layout from "../../components/Layout"
import { search } from "../api"

export default function News() {
    return(
      <Layout>
        <h1>Search</h1>
      </Layout>
    )
}

const API_KEY = "a2Gp0bWGCzefcXBBjzvplAp0nVEuavee"
export async function getServerSideProps({ params }) {
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {}
  }
}