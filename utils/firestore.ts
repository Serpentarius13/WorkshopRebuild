// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1QjhDcwXUX7kCaAlBljZw8JbVIor1aiw",
  authDomain: "todo-72003.firebaseapp.com",
  projectId: "todo-72003",
  storageBucket: "todo-72003.appspot.com",
  messagingSenderId: "870948597899",
  appId: "1:870948597899:web:f582ec2cf87d4d3db7648e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const store = getStorage();

export const uploadFileWithLink = async (data) => {
  const file = data.avatar[0];
  const fileRef = ref(store, file.name);

  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);
  return url;
};
