import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import Home from "./Home/Home";
import Booking from "./Booking/Booking";
import Navbar from "./Shared Components/NavBar";

function App() {
  let component: JSX.Element | null = null;

  switch(window.location.pathname){
    case '/':
      component = <Home/>
      break
    case '/post':
      component = <Booking/>
      break
  }
  Amplify.configure({
    Auth: {
      region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
    },
  });

  const GetAuthComponent = (props: any) => {
    Auth.currentAuthenticatedUser().then((res) => {
      localStorage.setItem(
        "JWT",
        res.signInUserSession.getAccessToken().getJwtToken()
      );
    });
    return (
      <>
      <Navbar/>
        {component}
      </>
    );
  };

  return (
    <>
      <Authenticator signUpAttributes={["name"]}>
        <GetAuthComponent />
      </Authenticator>
    </>
  );
}

export default App;
