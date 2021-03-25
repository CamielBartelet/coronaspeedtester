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
      <div className="contTitle">
        <h2>Meld je aan op Renorm</h2>
      </div>
      <div className="contText">
        <p>
          We hebben een account nodig om het proces op lange termijn te
          versnellen voor jou.
        </p>
      </div>
      <SignUpForm
        onnext={onnext}
        formId="add-account-form"
        accountForm={accountForm}
      />
    </>
  );
};
export default SignUp;
