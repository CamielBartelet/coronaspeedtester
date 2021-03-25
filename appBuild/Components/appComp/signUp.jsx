import SignUpForm from "./signUpform";

const SignUp = ({ onnext }) => {
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
        <SignUpForm
          onnext={onnext}
          formId="add-account-form"
          accountForm={accountForm}
        />
      </div>
    </>
  );
};
export default SignUp;
