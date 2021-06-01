import Layout from "../components/Layout/Layout";
import ParentComponent from "../components/ParentComponent";

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
      <ParentComponent />
    </Layout>
  );
};

export default Home;
