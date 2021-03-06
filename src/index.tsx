import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import Amplify from "aws-amplify";
import { ApolloProvider } from "@apollo/client";

import { AuthProvider, amplifyConfig } from "~auth";
import { ApiKeyClient } from "~config";
import { Router } from "~routing";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Tailwind CSS */
import "./tailwindcss.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

setupIonicReact({ mode: "md" });
Amplify.configure(amplifyConfig);

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={ApiKeyClient}>
      <AuthProvider>
        <IonApp>
          <Router />
        </IonApp>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
