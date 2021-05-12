import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import TopStories from "../components/TopStories/topstories";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopStories> </TopStories>
    </Layout>
  );
};

export default Home;
