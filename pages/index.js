import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import ParentComponent from "../components/TopStories/parentComponent";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ParentComponent />
    </Layout>
  );
};

export default Home;
