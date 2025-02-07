import logo from "@asset/logo.png";
import { SignSection, SignTab, SignTabBtn,
   SignCard, SignCardHeader,
    SignCardLogo,
     SignCardH1, SignCardP } from "@styled";
import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

function GuestContainerTab() {
  const [tab, setTab] = useState<string>("login");
  
  const renderTabContent = () => {
    switch (tab) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      default:
        return <Login />;
    }
  };

  return (
    <SignSection>
      <SignTab>
        <SignTabBtn 
          onClick={() => setTab("login")} 
          aria-selected={tab === "login"} 
          aria-controls="login-tab"
        >
          Login
        </SignTabBtn>
        <SignTabBtn 
          onClick={() => setTab("signup")} 
          aria-selected={tab === "signup"} 
          aria-controls="signup-tab"
        >
          Signup
        </SignTabBtn>
      </SignTab>

      <SignCard>
        <SignCardHeader>
          <SignCardLogo src={logo} alt="Chatzy Logo" />
          <SignCardH1>Hello, Everyone! Welcome to Chatzy</SignCardH1>
          <SignCardP>Please log in to your account to continue.</SignCardP>
        </SignCardHeader>
        {renderTabContent()}
      </SignCard>
    </SignSection>
  );
}

export default GuestContainerTab;
