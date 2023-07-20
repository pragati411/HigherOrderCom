import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { useContext } from "react";
import { switchThemeContext } from "../context/themeContext";
import { loginContext } from "../context/loginContext";
import { Link } from "react-router-dom";
const Firstblacktheme = () => {
  const triggerGoogleSign = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAuf4L0P-b69m0IKQGl-UZ_6jkfO2wPtdQ",
      authDomain: "chetak-4e794.firebaseapp.com",
      projectId: "chetak-4e794",
      storageBucket: "chetak-4e794.appspot.com",
      messagingSenderId: "274010369347",
      appId: "1:274010369347:web:91c7e573d4a55673d793f6",
      measurementId: "G-JGBG2QJZMD",
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app);
    const analytics = getAnalytics(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log("SK@user", user.displayName);
        const userProfile = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
        };
        test.setTestFunc(userProfile);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
  };

  
  return (
    <>
      
      <button onClick={test.setTestFunc}>Change test</button>
      <button onClick={triggerGoogleSign}>Google Sign-In</button>
      
    </>
  );
};
export default Firstblacktheme;