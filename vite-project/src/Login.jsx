import { useNavigate } from "react-router-dom";
import Firstblacktheme from "./Sigin";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const logMeIn = {
      userLoggedIn: true,
    };
    let userProfile = {};
    localStorage.setItem("user", JSON.stringify(logMeIn));

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
        userProfile = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
        };
        console.log("@user", userProfile);

        localStorage.setItem("google_sign", JSON.stringify(userProfile));

        const log = localStorage.getItem("user");
        const logCheck = JSON.parse(log);
        const google_sign = localStorage.getItem("google_sign");
        const google_signObj = JSON.parse(google_sign);
        if (
          logCheck &&
          google_signObj &&
          Object.keys(google_signObj).length !== 0
        ) {
          navigate("/home");
        }
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
    <div>
      <h1>Login Component</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
