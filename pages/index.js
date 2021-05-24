import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import ParentComponent from "../components/parentComponent";

import firebase from "firebase/app";
import firebaseConfig from "../config/firebase.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ParentComponent />
    </Layout>
  );
};

export default Home;
