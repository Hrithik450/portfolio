import { collection, addDoc } from "firebase/firestore";
import db from "../database/firebase.js";

async function addData() {
  try {
    const DocRef = await addDoc(collection(db, "users"), {
      name: "Hruthik M",
      email: "mhrithik450@gmail.com",
      age: 18,
    });
    console.log("Document written with ID:", DocRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

export default addData;
