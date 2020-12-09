import Accounts from "./userFormat";

const SignUp = () => {
  const accountForm = {
    name: "",
    lastname: "",
    email: "",
  };

  return (
    <>
      <div>
        <Accounts formId="add-account-form" accountForm={accountForm} />
      </div>
    </>
  );
};

export default SignUp;
