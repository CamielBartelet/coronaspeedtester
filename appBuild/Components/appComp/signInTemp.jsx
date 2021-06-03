import React, { useState } from "react";
import AppCompstyle from "./appCompstyle";

const SignInTemp = ({ csrfToken }) => {
  const [isFilled, setIsFilled] = useState("");

  return (
    <>
      <style jsx>{AppCompstyle}</style>

      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="signupmail">
          <p>Emailadres</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            onChange={(e) => setIsFilled(e.target.value)}
          />
        </div>
        <div className="signupbtn">
          <button
            className="signbtnCont"
            disabled={isFilled != "" ? false : true}
            type="submit"
            style={
              isFilled != ""
                ? { background: "#86e4d9", cursor: "pointer" }
                : { background: "#E4E4E4", cursor: "not-allowed" }
            }
          >
            Aanmelden op Renorm
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInTemp;
