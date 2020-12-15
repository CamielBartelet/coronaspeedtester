import SignUpForm from "./signUpform";

const SignUp = () => {
  const accountForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    postalCode: "",
    postalNumber: "",
    phone: "",
    bsnnumber: "",
  };

  return (
    <>
      <div>
        <SignUpForm formId="add-account-form" accountForm={accountForm} />
      </div>
    </>
  );
};
export default SignUp;
