import Layout from "../../components/Layout";

export default function News({ results }) {
  return (
    <Layout>
      <h1>Top Stories</h1>
      <ul>
        {results.map((result) => (
          <li key={result.uri}>
            <a target="_blank" href={result.url} rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

const API_KEY = "a2Gp0bWGCzefcXBBjzvplAp0nVEuavee";
export async function getStaticProps() {
  // The value of the `props` key will be passed to the `Home` component
  const URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: {
      results: data.results,
    },
  };
}
