import Image from "next/image";
import gif from "../public/not-found.gif";
import Layout from "../components/Layout";
export default function NotFound() {
  return (
    <Layout>
      <h1>Not Found</h1>
      <Image src={gif} alt="not_found"></Image>
      <style jsx>
        {`
          h1 {
            color: red;
            visibility: hidden;
          }
        `}
      </style>
    </Layout>
  );
}
