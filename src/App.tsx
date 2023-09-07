import React, { useState } from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Shared Components/NavBar";
import PostDetails from "./ServiceUpload/PostDetails";

function App() {
  const [component, setComponent] = useState(<Home />);

  const navBarSelector = (s: string) => {
    switch (s) {
      case "home":
        setComponent(<Home />);
        break;
      case "services":
        break;
      case "post":
        setComponent(<PostDetails />);
        break;
      case "logout":
        setComponent(<Home />);
        break;
      default:
        setComponent(<Home />);
    }
  };

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
      localStorage.setItem("guid",res.attributes.sub);
      localStorage.setItem("email",res.attributes.email);

      let body = {
        email: res.attributes.email,
        guid: res.attributes.sub,
      };
      fetch("https://rxkz2qmrji.eu-west-1.awsapprunner.com/users", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("JWT"),
        },
      }).then((res) => console.log(res));
    });
    return (
      <>
        <Navbar setComponent={navBarSelector} signOut={props.signOut} />
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
