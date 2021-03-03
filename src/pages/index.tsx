import Head from "next/head";
import { useState } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styles from "../styles/pages/Index.module.css";
import { FirebaseAuth } from "react-firebaseui";

export default function Index() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAmG90TjgAFD5Qs_rA1U2YdjijAbdvk4tU",
        authDomain: "keep-in-action.firebaseapp.com",
        projectId: "keep-in-action",
        storageBucket: "keep-in-action.appspot.com",
        messagingSenderId: "687987834157",
        appId: "1:687987834157:web:bb3ee649a990fc4b0527a4",
      });
    } else {
      firebase.app();
    }
  }

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/home",
    signInOptions: [
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        providerName: "Github",
        buttonColor: "#4953B8",
      },
    ],
  };

  function componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!user);
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <div className={styles.logo_section}>
        <img src="/opacity-logo.svg" alt="logo com opacidade"/>
      </div>
      <div className={styles.login_section}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className={styles.information_screen}>
        <h1>Bem-Vindo</h1>

        {isSignedIn ? (
          <h1>You Signed In</h1>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}

        <p>Ou</p>

        <a href="#">Crie uma conta</a>
        </div>
      
      </div>
    </div>
  );
}
