import firebase from "firebase/app";
import "firebase/firestore";

export const saveNewsletter = async (data) => {
  try {
    const db = firebase.firestore();
    return await db.collection("newsletters").add(data);
  } catch (err) {
    console.log(err);
    return null;
  }
};
