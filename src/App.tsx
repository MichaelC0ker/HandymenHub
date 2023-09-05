import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  // TODO: replace with env variables
  Amplify.configure({
    Auth: {
      region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
    },
  });

  const GetAuthComponent = (props: any) => {
    console.log(props);
    return (
      <div>
        <p>Welcome {props.user?.attributes?.name}</p>
        <button onClick={props.signOut}>Sign out</button>
      </div>
    );
  };

  return (
    <Authenticator signUpAttributes={["name"]}>
      <GetAuthComponent />
    </Authenticator>
  );
}

export default App;
