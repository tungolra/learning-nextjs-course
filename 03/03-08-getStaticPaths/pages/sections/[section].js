import Head from "next/head";
import Layout from "../../components/Layout";
import { handler } from "../api";

function Posts({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
        <ul>
          {results?.map((result) => (
            <li>
              <a href={result.url} rel="noreferrer nofollower">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
  );
  return {
    paths: results.map((result) => {
      return { params: { section: result.section } };
    }),
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`
  );
  return {
    props: {
      results,
      title: params.section,
    },
  };
}
export default Posts;