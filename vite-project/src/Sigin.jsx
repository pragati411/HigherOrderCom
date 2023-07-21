import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const Firstblacktheme = () => {
  const triggerGoogleSign = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCfm0Oy9s1kTyAvHbF_HQGKCMaFiTGnnck",
      authDomain: "higherordercom.firebaseapp.com",
      projectId: "higherordercom",
      storageBucket: "higherordercom.appspot.com",
      messagingSenderId: "154233443675",
      appId: "1:154233443675:web:bb5a7f904bce062a92767e",
      measurementId: "G-5856D37TS2",
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
        console.log("@user", user.displayName);
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
      <button onClick={triggerGoogleSign}>Google Sign-In</button>
    </>
  );
};
export default Firstblacktheme;
