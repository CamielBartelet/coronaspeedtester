import AppCompstyle from "./appCompstyle";

const SignInTemp = ({ csrfToken }) => {
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
          />
        </div>
        <div className="signupbtn">
          <button className="signbtnCont" type="submit">
            Aanmelden op Renorm
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInTemp;
